import {
    StyleSheet,
    Text,
    View,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
    TextInput,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button, Card, Searchbar } from "react-native-paper";
import { Avatar } from "react-native-paper";
import Accordion from "react-native-collapsible/Accordion";
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
    useGetAppointmentQuery,
    useGetPrescriptionByIdQuery,
} from "@/pharmacist/pharmacist.service";
import { Prescription } from "@/pharmacist/prescription/Prescription.type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/pharmacist/store";
import { startEditPost } from "@/pharmacist/prescription";
import { router } from "expo-router";
// import { useFonts } from "expo-font";
const Home = () => {
    const { data, isLoading, isFetching, isError } = useGetAppointmentQuery();
    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchResult, setSearchResult] = React.useState();
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    // variables
    const snapPoints = useMemo(() => ["75%", "75%", "75%", "75%"], []);
    // callbacks
    const handlePresentModalPress = useCallback((id: any) => {
        bottomSheetModalRef.current?.present();
        distpath(startEditPost(id))
    }, []);
    const [activeSections, setActiveSections] = useState([]);

    const updateSections = (activeSections: any) => {

        setActiveSections(activeSections);

    };
    const [listCustomer, setListCustomer] = useState([]);
    const presrptionId = useSelector((state: RootState) => state.prescription.id);
    const { data: prescriptionData, isFetching: fetchingPrescriptionData, isLoading: loadingPrescription } = useGetPrescriptionByIdQuery(presrptionId, {
        skip: !presrptionId,
    });
    const distpath = useDispatch()
    const filterCustomer = (value: any) => {
        return (data as any)?.data.filter((account: any) => {
            return (
                value &&
                account.customer.phone_number.includes(value)
            )
        })
    }
    const getDateInfo = (): { day: number; month: string; year: number; dayName: string } => {
        const today = new Date(); // Lấy ngày hiện tại

        // Lấy ngày (1-31)
        const day: number = today.getDate();
        // Lấy chỉ số tháng (0-11)
        const monthIndex: number = today.getMonth();
        // Lấy tháng (0-11). Cần cộng thêm 1 nếu muốn từ 1-12.
        const months: string[] = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];
        const month: string = months[monthIndex];
        // Lấy năm (ví dụ: 2024)
        const year: number = today.getFullYear();

        // Lấy ngày trong tuần (0-6)
        const dayOfWeek: number = today.getDay();

        // Map các số 0-6 thành tên các thứ
        const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName: string = days[dayOfWeek];

        return { day, month, year, dayName };
    };

    // Sử dụng hàm
    const { day, month, year, dayName } = getDateInfo();
    useEffect(() => {
        setSearchResult(filterCustomer(searchQuery))
    }, [searchQuery])

    const hanldListSearch = () => {
        router.replace('./(tabs)/list');
    }
    const inputRef = useRef<TextInput>(null);
    const handleButtonPress = () => {
        // Khi button được nhấn, gọi phương thức blur() trên input để out focus
        inputRef.current?.blur();
        setIsFocus(false)
    };
    const [isFocus, setIsFocus] = useState(false)
    const renderHeader = (session: any) => {
        return (
            <Card className="bg-[#E7E7E8] mt-5 p-1">
                <Card.Content>
                    <View className="flex flex-row items-center justify-between">

                        <View className="flex flex-row items-center">
                            <View>
                                <Image source={require("@/assets/images/pets 4.png")} />
                            </View>
                            <View className="ml-3">
                                <Text className="text-[#0D74B1] text-base font-medium " style={{fontFamily: "blod"}}>
                                    Tên:{" "}
                                    <Text className="!text-black" style={{fontFamily: "medium"}}> {session.pet.name}</Text>
                                </Text>
                                <Text className="text-[#0D74B1] text-base font-medium " style={{fontFamily: "blod"}}>
                                    Bệnh: <Text className="!text-black" style={{fontFamily: "medium"}}>{session.note}</Text>
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
            <View className="bg-[#E7E7E8] rounded-2xl px-5 pt-3">
                <View className="w-auto h-auto">
                    {session?.medicine.map((medicine: any) => (
                        <View className="flex flex-row items-center justify-between mb-3">
                            <View className="flex flex-row items-center">
                                <View>
                                    <Image source={require("@/assets/images/image.png")} />
                                </View>
                                <View className="ml-3">
                                    <Text className="text-[#0D74B1] text-sm font-medium " style={{fontFamily: "blod"}}>
                                        {medicine.name}
                                    </Text>
                                    <Text className="text-[#0D74B1] text-base font-medium " style={{fontFamily: "blod"}}> 
                                        Mã sản phẩm:{" "}
                                        <Text className="!text-black font-bold" style={{fontFamily: "medium"}}>{medicine.id}</Text>
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{fontFamily: "medium"}}>
                                    x{medicine.quantity} / <Text>{medicine.calculate_unit}</Text>
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        );
    };
    return (
        // <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <GestureHandlerRootView>
                <BottomSheetModalProvider>
                    <View className="mt-16">
                        <View className="flex-row gap-4 gap-y-5 static py-5 items-center">
                            {
                                !isFocus
                                    ?
                                    <View className="w-[95%] px-5">
                                        <Searchbar
                                            ref={inputRef}
                                            style={styles.searchbar}
                                            placeholder="Search list customer"
                                            // onChangeText={(query) => setSearchQuery(query)}
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
                                        <View className="ml-[5.5px]">
                                            <Text className="text-[50px] font-bold text-[#0099CF]" style={{fontFamily: "blod"}}>
                                                {day}
                                            </Text>
                                        </View>
                                        <View className="ml-[5.5px]">
                                            <Text className="text-sm text-[#0099CF] opacity-70 font-bold" style={{fontFamily: "blod"}}>
                                                {dayName}
                                            </Text>
                                            <Text className="text-sm text-[#0099CF]" style={{fontFamily: "medium"}}>
                                                {month} {year}
                                            </Text>
                                        </View>
                                        <View className="ml-16">
                                            <Text className="text-4xl text-[#0099CF] font-bold" style={{fontFamily: "blod"}}>
                                                Today
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            }
                            <View className=" p-5 pb-64 ">
                                {
                                    isFocus
                                        &&
                                        !searchQuery.length
                                        ?
                                        <View className="flex flex-1 justify-center items-center h-[550px]">
                                            <Image className="w-56 h-24" source={require("@/assets/images/loading.gif")} />
                                            <Text className="text-[#ACACAD]" style={{fontFamily: "blod"}}>Waiting for few minus...</Text>
                                        </View>
                                        :
                                        (searchResult as any)?.map((search: any) => (
                                            <Card
                                                className="bg-[#E7E7E8] mb-5"
                                                onPress={() => handlePresentModalPress(search.id)}
                                            >
                                                <Card.Content>
                                                    <Text className="font-bold text-lg text-[#0D74B1]" style={{fontFamily: "blod"}}>
                                                        #PC{search.id}
                                                    </Text>
                                                    <Text className="text-[#0D74B1] text-base font-medium" style={{fontFamily: "blod"}}>
                                                        Họ và tên:{" "}
                                                        <Text className="!text-black" style={{fontFamily: "medium"}}>
                                                            {search.customer.last_name}{" "}
                                                            {search.customer.first_name}
                                                        </Text>
                                                    </Text>
                                                    <Text className="text-[#0D74B1] text-base font-medium" style={{fontFamily: "blod"}}>
                                                        Số điện thoại:{" "}
                                                        <Text className="!text-black" style={{fontFamily: "medium"}}>
                                                            {search.customer.phone_number}
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
                                            <Text className="text-[#ACACAD] font-bold" style={{fontFamily: "blod"}}>Customer loading...</Text>
                                        </View>
                                        :
                                        !isFocus && !isFetching && ((data as any)?.data as Prescription[]).map(
                                            (prescription) => (
                                                <Card
                                                    className="bg-[#E7E7E8] mb-5"
                                                    onPress={() => handlePresentModalPress(prescription.id)}
                                                >
                                                    <Card.Content>
                                                        <Text className=" text-lg text-[#0D74B1]" style={{fontFamily: "blod"}}> 
                                                            #PC{prescription.id}
                                                        </Text>
                                                        <Text className="text-[#0D74B1] text-base font-medium" style={{fontFamily: "blod"}}>
                                                            Họ và tên:{" "}
                                                            <Text className="!text-black" style={{fontFamily: "medium"}}>
                                                                {prescription.customer.last_name}{" "}
                                                                {prescription.customer.first_name}
                                                            </Text>
                                                        </Text>
                                                        <Text className="text-[#0D74B1] text-base font-medium" style={{fontFamily: "blod"}}>
                                                            Số điện thoại:{" "}
                                                            <Text className="!text-black" style={{fontFamily: "medium"}}>
                                                                {prescription.customer.phone_number}
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
                                // handleIndicatorStyle={{ display: "none" }}
                                >
                                    <BottomSheetView>
                                        <View className='flex flex-col justify-between pb-80 h-screen' style={{ width: wp(100) }}>
                                            {
                                                loadingPrescription
                                                    ?
                                                    <View className="flex flex-1 justify-center items-center mt-5">
                                                        <Image className="w-56 h-24" source={require("@/assets/images/loading.gif")} />
                                                        <Text className="text-[#ACACAD] font-bold h-10" style={{fontFamily: "blod"}}>Prescription loading...</Text>
                                                    </View>
                                                    :
                                                    <View >
                                                        <Text className="text-xl font-bold ml-4" style={{fontFamily: "blod"}}>#PC{(prescriptionData as any)?.data.id}</Text>
                                                        <View className="px-4 py-4">
                                                            <Accordion
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
                                            <View className="flex flex-row justify-between px-5">
                                                <View>
                                                    <Text className="font-bold text-2xl text-[#0D74B1]" style={{fontFamily: "blod"}}>
                                                        Medical total
                                                    </Text>
                                                    {
                                                        loadingPrescription
                                                            ?
                                                            <Text className="text-base ml-4" style={{fontFamily: "medium"}}>
                                                                000.000 VND
                                                            </Text>
                                                            :
                                                            <Text className="text-base ml-4" style={{fontFamily: "medium"}}>
                                                                {Intl.NumberFormat("vi-VN", {}).format(
                                                                    (prescriptionData as any)?.data.total_price
                                                                )}{" "}
                                                                VND
                                                            </Text>
                                                    }
                                                </View>
                                                <View>
                                                    <Button
                                                        mode="contained"
                                                        className="w-40 h-14 flex justify-center !bg-[#0F74C1]"
                                                    >
                                                        <Text className="text-base font-bold" style={{fontFamily: "blod"}}>Approved</Text>
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
    }
});
