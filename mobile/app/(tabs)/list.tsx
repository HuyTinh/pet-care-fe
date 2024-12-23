import {
    StyleSheet,
    Text,
    View,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
    TextInput,
    StatusBar,
    TouchableOpacity,
    Modal,
} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button, Card, Searchbar } from "react-native-paper";
import Accordion from "react-native-collapsible/Accordion";
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
    useCancelBillMutation,
    useCreateBillMutation,
    useGetPrescriptionByIdQuery,
    useGetPrescriptionQuery,
} from "@/app/pharmacist.service";
import { IPrescription } from "@/@types/prescription.type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { pharmacistProfileId } from "@/app/pharmacist.slice";
import { Link, router, useFocusEffect } from "expo-router";
import WebSocketManager from "@/config/web-socket-manager";
const Home = () => {
    const getDateInfo = (): { day: number; month: string; year: number; dayName: string } => {
        const dateInfo = useMemo(() => {
            const today = new Date();
            const day: number = today.getDate();
            const monthIndex: number = today.getMonth();
            const months: string[] = [
                'January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December'
            ];
            const month: string = months[monthIndex];
            const year: number = today.getFullYear();
            const dayOfWeek: number = today.getDay();
            const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayName: string = days[dayOfWeek];
            return { day, month, year, dayName };
        }, [])
        return dateInfo;
    };
    const { data: prescriptionResponse, isLoading, isFetching, isError } = useGetPrescriptionQuery();
    const [prescriptions, setPrescriptions] = useState();
    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchResult, setSearchResult] = React.useState();
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ["75%"], []);
    const handlePresentModalPress = useCallback((id: any) => {
        bottomSheetModalRef.current?.present();
        distpath(pharmacistProfileId(id))
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            return () => bottomSheetModalRef.current?.close()
        }, [])
    );
    useEffect(() => {
        console.log(12);

        setPrescriptions((prescriptionResponse as any)?.data)
    }, [prescriptionResponse?.data])

    const [activeSections, setActiveSections] = useState([]);
    const updateSections = (activeSections: any) => {
        setActiveSections(activeSections);
    };
    const presrptionId = useSelector((state: RootState) => state.pharmacist.id);
    const { data: prescriptionData, isFetching: fetchingPrescriptionData, isLoading: loadingPrescription } = useGetPrescriptionByIdQuery(presrptionId, {
        skip: !presrptionId,
    });
    const distpath = useDispatch()
    const filterCustomer = (value: any) => {
        return (prescriptions as any)?.filter((account: any) => {
            return (
                value &&
                account.appointment.phone_number.includes(value)
            )
        })
    }
    const { day, month, year, dayName } = getDateInfo();
    useEffect(() => {
        setSearchResult(filterCustomer(searchQuery))
    }, [searchQuery])
    const inputRef = useRef<TextInput>(null);
    const handleButtonPress = () => {
        inputRef.current?.blur();
        setIsFocus(false)
        setSearchQuery("")
    };
    const [isFocus, setIsFocus] = useState(false)
    const options = ['Cash', 'Banking'];
    const [modalVisible, setModalVisible] = useState(false);
    const [countdown, setCountdown] = useState(300);
    const [craeteBill] = useCreateBillMutation();
    const [cancelBill] = useCancelBillMutation();
    const [invoice, setInvoice] = useState();
    const [selectedOption, setSelectedOption] = useState<any>("Cash");
    const stompClient = WebSocketManager.getInstance().getClient();
    useEffect(() => {
        if (stompClient) {
            stompClient.onConnect = () => {
                console.log("Connected to WebSocket");
                // Gửi yêu cầu kết nối
                stompClient.publish({ destination: "/app/connect" });
                stompClient.subscribe("/topic/pharmacist-update-prescription", (message) => {
                    const receiveData = JSON.parse(message.body);
                    setPrescriptions((prevState: any) => [...prevState, receiveData] as any)
                });
            };

            stompClient.onDisconnect = () => {
                console.log("Disconnected from WebSocket");
            };
        }

        return () => {
            // Không gọi deactivate() ở đây
            // stompClient?.deactivate;
        };
    }, [stompClient]);
    const handlApproved = () => {
        if (selectedOption === 'Banking') {
            craeteBill({
                "prescription_id": (prescriptionData?.data as any)?.id,
                "payment_method": "BANKING",
                "total_money": (prescriptionData?.data as any)?.total_money
            }).then(res => {
                setInvoice((res?.data?.data as any))
                setModalVisible(true);
                setCountdown(300);
            })
        }
        else {
            craeteBill({
                "prescription_id": (prescriptionData?.data as any)?.id,
                "payment_method": "CASH",
                "total_money": (prescriptionData?.data as any)?.total_money
            }).then(res => {
                bottomSheetModalRef.current?.close()
            })
        }
    }
    const startCountdown = useCallback(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev === 1) {
                    setModalVisible(false);
                    clearInterval(timer);
                    return 300;
                }
                return prev - 1;
            });
        }, 1000);
        return timer;
    }, []);
    useEffect(() => {
        let timer: any;
        if (modalVisible) {
            timer = startCountdown();
        }
        return () => clearInterval(timer);
    }, [modalVisible, startCountdown]);
    const minutes = useMemo(() => Math.floor(countdown / 60), [countdown]);
    const seconds = useMemo(() => countdown % 60, [countdown]);
    const handleCancel = useCallback(() => {
        cancelBill({ invoiceId: (invoice as any).id }).then(() => {
            setModalVisible(false);
            setCountdown(300);
        })
    }, [invoice]);
    const renderHeader = (session: any) => {
        return (
            <Card className="p-1 ">
                <Card.Content>
                    <View className="flex flex-row items-center justify-between">
                        <View className="flex flex-row items-center">
                            <View>
                            </View>
                            <View className="ml-3">
                                <Text className="text-[#0D74B1] text-base font-medium " style={{ fontFamily: "blod" }}>
                                    Tên thú cưng:{" "}
                                    <Text className="!text-black" style={{ fontFamily: "medium" }}> {session.pet.name}</Text>
                                </Text>
                                <Text className="text-[#0D74B1] text-base font-medium " style={{ fontFamily: "blod" }}>
                                    Bệnh: <Text className="!text-black" style={{ fontFamily: "medium" }}>{session.diagnosis}</Text>
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Image
                                className="justify-end"
                                source={require("@/assets/images/arrow_drop_down.png")}
                            />
                        </View>
                    </View>
                </Card.Content>
            </Card>
        );
    };
    const renderContent = (session: any) => {
        return (
            <View className="bg-slate-100 rounded-2xl px-5 pt-3">
                <View className="w-auto h-auto">
                    {session?.medicines?.map((medicine: any, index: number) => (
                        <View className="flex flex-row items-center justify-between mb-3 w-full" key={index}>
                            <View className="flex flex-row items-center w-3/4">
                                <View>
                                    <Image source={require("@/assets/images/image.png")} />
                                </View>
                                <View className="ml-3">
                                    <Text className="text-[#0D74B1] text-sm font-medium " style={{ fontFamily: "blod" }}>
                                        {medicine.name}
                                    </Text>
                                    <Text className="text-[#0D74B1] text-base font-medium " style={{ fontFamily: "blod" }}>
                                        Mã sản phẩm:{" "}
                                        <Text className="!text-black font-bold" style={{ fontFamily: "medium" }}>{medicine.id}</Text>
                                    </Text>
                                </View>
                            </View>
                            <View className="flex flex-row w-1/4 justify-end">
                                <Text style={{ fontFamily: "medium" }}>
                                    x{medicine.quantity} / {""}
                                </Text>
                                <Text style={{ fontFamily: "medium" }}>
                                    <Text>{medicine.calculate_unit}</Text>
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        );
    };

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="flex-1 justify-center items-center">
                    <View style={{ width: 380, height: 320, padding: 50, backgroundColor: 'white', borderRadius: 10 }} className="flex justify-center items-center">
                        <View className="justify-center items-center">
                            <Text>
                                <Link href="https://dl.vietqr.io/pay?app=icb&"><Image className="w-48 h-48" source={{ uri: (invoice as any)?.checkout_response.qrCode }} /></Link>
                            </Text>
                            <Text className="text-sm mt-2" style={{ fontFamily: "medium" }}>QR will expire after {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</Text>
                            <Text className="items-center text-base mt-5" style={{ fontFamily: "blod" }}>Petcare thanks you for your favor!</Text>
                            <Button style={styles.buttonModal} onPress={() => handleCancel()} >
                                <Text className="font-bold text-base text-white text-center">Cancel</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        bottomSheetModalRef.current?.close();
                    }}
                >
                    <GestureHandlerRootView>
                        <BottomSheetModalProvider>
                            <View className="mt-16">
                                <StatusBar barStyle="dark-content" />
                                <View className="flex-row gap-4 gap-y-5 static py-5 items-center">
                                    {
                                        !isFocus
                                            ?
                                            <View className="w-full px-5">
                                                <Searchbar
                                                    ref={inputRef}
                                                    style={styles.searchbar}
                                                    placeholder="Search list customer"
                                                    value={searchQuery}
                                                    onFocus={() => setIsFocus(true)}
                                                />
                                            </View>
                                            :
                                            <View className="w-[95%] px-5">
                                                <Searchbar
                                                    ref={inputRef}
                                                    style={styles.searchbar}
                                                    placeholder="Search list customer"
                                                    onChangeText={(query) => setSearchQuery(query)}
                                                    value={searchQuery}
                                                    onFocus={() => setIsFocus(true)}
                                                    icon={() =>
                                                        <View>
                                                            <Button onPress={handleButtonPress} >
                                                                <Image source={require('@/assets/images/back.png')} style={styles.backIcon} />
                                                            </Button>
                                                        </View>
                                                    }

                                                />
                                            </View>
                                    }
                                </View>
                                <ScrollView>
                                    {
                                        !isFocus &&
                                        <View className="px-3 py-1 static">
                                            <View className="flex-row items-center">
                                                <View>
                                                    <View style={styles.square} />
                                                    <Image
                                                        className="absolute ml-[14px] mt-[8px] "
                                                        source={require("@/assets/images/calendar.png")}
                                                    />
                                                </View>
                                                <View className="px-1">
                                                    <Text className="text-[50px] font-bold text-[#0099CF]" style={{ fontFamily: "blod" }}>

                                                        {day}
                                                    </Text>
                                                </View>
                                                <View>
                                                    <Text className="text-sm text-[#0099CF] opacity-70 font-bold" style={{ fontFamily: "blod" }}>
                                                        {dayName}
                                                    </Text>
                                                    <Text className="text-sm text-[#0099CF]" style={{ fontFamily: "medium" }}>

                                                        {month} {year}
                                                    </Text>
                                                </View>
                                                <View className="flex-1">
                                                    <Text className="text-4xl text-[#0099CF] font-bold text-right" style={{ fontFamily: "blod" }}>

                                                        Today
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    }
                                    <View className="p-5 flex gap-5 mb-24">
                                        {
                                            isFocus
                                                &&
                                                !searchQuery.length
                                                ?
                                                <View className="flex flex-1 justify-center items-center h-[550px]">
                                                    <Image className="w-56 h-24" source={require("@/assets/images/loading.gif")} />
                                                    <Text className="text-[#ACACAD]" style={{ fontFamily: "blod" }}>Waiting for few minus...</Text>

                                                </View>
                                                :
                                                (searchResult as any)?.map((search: any, index: number) => (
                                                    <Card
                                                        className="bg-red-500"
                                                        onPress={() => handlePresentModalPress(search.id)}
                                                        key={index}
                                                    >
                                                        <Card.Content>
                                                            <Text className="font-bold text-lg text-[#0D74B1]" style={{ fontFamily: "blod" }}>
                                                                #PC{search.id}
                                                            </Text>
                                                            <Text className="text-[#0D74B1] text-base font-medium" style={{ fontFamily: "blod" }}>
                                                                Họ và tên:{" "}
                                                                <Text className="!text-black" style={{ fontFamily: "medium" }}>
                                                                    {search.appointment?.last_name}{" "}
                                                                    {search.appointment?.first_name}
                                                                </Text>
                                                            </Text>
                                                            <Text className="text-[#0D74B1] text-base font-medium" style={{ fontFamily: "blod" }}>
                                                                Số điện thoại:{" "}
                                                                <Text className="!text-black" style={{ fontFamily: "medium" }}>

                                                                    {search.appointment.phone_number}
                                                                </Text>
                                                            </Text>
                                                            <Image
                                                                className="absolute top-6 right-4"
                                                                source={require("@/assets/images/pets 4.png")}
                                                            />
                                                        </Card.Content>
                                                    </Card>
                                                ))
                                        }
                                        {
                                            isLoading
                                                ?
                                                <View className="flex flex-1 justify-center items-center h-[400px]">
                                                    <Image className="w-56 h-24" source={require("@/assets/images/loading.gif")} />
                                                    <Text className="text-[#ACACAD] font-bold" style={{ fontFamily: "blod" }}>Customer loading...</Text>

                                                </View>
                                                :
                                                !isFocus && !isFetching && (prescriptions as any)?.map(
                                                    (prescription: any, index: number) => (
                                                        <Card
                                                            className="bg-[#E7E7E8]"
                                                            onPress={() => handlePresentModalPress(prescription.id)}
                                                            key={index}
                                                        >
                                                            <Card.Content>
                                                                <Text className=" text-lg text-[#0D74B1]" style={{ fontFamily: "blod" }}>
                                                                    #PC{prescription.id}
                                                                </Text>
                                                                <Text className="text-[#0D74B1] text-base font-medium" style={{ fontFamily: "blod" }}>
                                                                    Họ và tên:{" "}
                                                                    <Text className="!text-black" style={{ fontFamily: "medium" }}>

                                                                        {prescription?.appointment?.last_name}{" "}
                                                                        {prescription.appointment?.first_name}
                                                                    </Text>
                                                                </Text>
                                                                <Text className="text-[#0D74B1] text-base font-medium" style={{ fontFamily: "blod" }}>

                                                                    Số điện thoại:{" "}
                                                                    <Text className="!text-black" style={{ fontFamily: "medium" }}>
                                                                        {prescription?.appointment?.phone_number}
                                                                    </Text>
                                                                </Text>
                                                                <Image
                                                                    className="absolute top-6 right-4"
                                                                    source={require("@/assets/images/pets 4.png")}
                                                                />
                                                            </Card.Content>
                                                        </Card>
                                                    ))

                                        }
                                        <BottomSheetModal
                                            ref={bottomSheetModalRef}
                                            index={1}
                                            snapPoints={snapPoints}
                                        >
                                            <BottomSheetView>
                                                <View className='flex flex-col justify-between h-full' style={{ width: wp(100) }}>
                                                    {
                                                        loadingPrescription
                                                            ?
                                                            <View className="flex flex-1 justify-center items-center mt-5">
                                                                <Image className="w-56 h-24" source={require("@/assets/images/loading.gif")} />
                                                                <Text className="text-[#ACACAD] font-bold h-10" style={{ fontFamily: "blod" }}>Prescription loading...</Text>
                                                            </View>
                                                            :
                                                            <View >
                                                                <Text className="text-xl font-bold ml-4" style={{ fontFamily: "blod" }}>#PC{(prescriptionData as any)?.data.id}</Text>
                                                                <View className="px-4 py-4">
                                                                    <Accordion
                                                                        sectionContainerStyle={{
                                                                            display: "flex",
                                                                            gap: 10

                                                                        }}
                                                                        sections={(prescriptionData as any)?.data.details || []}
                                                                        activeSections={activeSections}
                                                                        underlayColor="transparent"
                                                                        renderHeader={renderHeader}
                                                                        renderContent={renderContent}
                                                                        onChange={updateSections}
                                                                    />
                                                                </View>
                                                            </View>
                                                    }
                                                    <View className="w-full h-48 flex bg-slate-50 ">
                                                        <View className="w-full mt-3 flex-row h-14 px-3">
                                                            {options.map((option, index) => (
                                                                <TouchableOpacity
                                                                    className="flex-1 justify-center items-center px-2 py-2"
                                                                    key={index}
                                                                    style={[
                                                                        styles.optionContainer,
                                                                        selectedOption === option && styles.selectedOptionContainer,
                                                                    ]}
                                                                    onPress={() => setSelectedOption(option)}
                                                                >
                                                                    {selectedOption === option && (
                                                                        <Text style={styles.checkedIcon}>
                                                                            <FontAwesome name="check" size={10} color="white" />
                                                                        </Text>
                                                                    )}
                                                                    <Text
                                                                        style={[
                                                                            styles.optionText,
                                                                            selectedOption === option && styles.selectedOptionText,
                                                                        ]}
                                                                    >
                                                                        {option}
                                                                    </Text>
                                                                </TouchableOpacity>
                                                            ))}
                                                        </View>
                                                        <View className=" mt-3 items-center">
                                                            <View>
                                                                <Text className="font-bold text-xl text-[#0D74B1]" style={{ fontFamily: "blod" }}>
                                                                    Medical total: {
                                                                        loadingPrescription
                                                                            ?
                                                                            <Text className="text-base ml-4" style={{ fontFamily: "medium" }}>
                                                                                000.000 VND
                                                                            </Text>
                                                                            :
                                                                            <Text className="text-base ml-4" style={{ fontFamily: "medium" }}>
                                                                                {Intl.NumberFormat("vi-VN", {}).format(
                                                                                    (prescriptionData as any)?.data.total_money
                                                                                )}{" "}
                                                                                VND
                                                                            </Text>
                                                                    }
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <View className="mt-3 w-full px-3">
                                                            <Button
                                                                mode="contained"
                                                                className="h-14 flex justify-center !bg-[#0F74C1]"
                                                                onPress={handlApproved}
                                                            >
                                                                <Text className="text-lg" style={{ fontFamily: "blod" }}>Approved</Text>
                                                            </Button>
                                                        </View>
                                                    </View>
                                                </View>
                                            </BottomSheetView>
                                        </BottomSheetModal>
                                    </View>
                                </ScrollView>
                            </View>
                        </BottomSheetModalProvider>
                    </GestureHandlerRootView>
                </TouchableWithoutFeedback>
            </TouchableWithoutFeedback>
        </>
    );
};
export default Home;
const styles = StyleSheet.create({
    searchbar: {
        backgroundColor: "rgba(0, 0, 0, 0.01)",
        borderWidth: 1,
        borderColor: "#0099CF",
        fontFamily: "Kodchasan-ExtraLightItalic"
    },
    square: {
        width: 60,
        height: 50,
        borderRadius: 15,
        backgroundColor: "rgba(0, 0, 0, 0.01)",

        // Viền
        borderWidth: 1.25,
        borderColor: "#0D74B1",
    },
    contentContainer: {
        padding: 15,
    },
    backButton: {
        position: "absolute",
        left: -20,
        top: 10,
        zIndex: 1,
    },
    backIcon: {
        width: wp('5.5%'),
        height: wp('5.5%'),
    },

    optionContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 8,
        marginHorizontal: 5,
        position: 'relative',
    },
    selectedOptionContainer: {
        borderColor: '#0099CF',
    },
    optionText: {
        fontSize: 16,
        color: '#000',
        opacity: 0.5,
        fontFamily: "blod"
    },
    selectedOptionText: {
        color: '#0099CF',
        fontWeight: 'bold',
        opacity: 1
    },
    checkedIcon: {
        position: 'absolute',
        top: -5,
        left: -5,
        backgroundColor: '#0099CF',
        borderRadius: 10,
        padding: 2,
    },
    buttonModal: {
        backgroundColor: "#0099CF",
        marginTop: 20,
        width: wp("50%")
    }
});
