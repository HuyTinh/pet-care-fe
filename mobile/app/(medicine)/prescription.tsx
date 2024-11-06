import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-native-paper';
import Accordion from 'react-native-collapsible/Accordion'
import { useSelector } from 'react-redux';
import { useGetPrescriptionByAppointmentIdQuery, useGetPrescriptionByIdQuery } from '@/app/pharmacist.service';
import { RootState } from '@/store/store';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';

const prescription = () => {

    const [activeSections, setActiveSections] = useState([])

    const updateSections = (activeSections: any) => {
        setActiveSections(activeSections)
    }
    const presrptionId = useSelector((state: RootState) => state.prescription.id);

    const { data, isFetching, isLoading } = useGetPrescriptionByAppointmentIdQuery(presrptionId, {
        skip: !presrptionId
    })
    const options = ['Cash', 'Banking'];
    const [modalVisible, setModalVisible] = useState(false);
    const [countdown, setCountdown] = useState(300);
    const [selectedOption, setSelectedOption] = useState<any>("Cash");
    const handlApproved = () => {
        if (selectedOption === 'Banking') {
            console.log("Banking");
            setModalVisible(true);
            setCountdown(300);
        }
        else {
            console.log("cash");
        }
    }
    useEffect(() => {
        let timer: any;
        if (modalVisible) {
            timer = setInterval(() => {
                setCountdown(prev => {
                    if (prev === 1) {
                        setModalVisible(false);
                        clearInterval(timer);
                        return 300;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [modalVisible]);
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const hanldCancel = () => {
        setModalVisible(false)
        setCountdown(300)
    }
    const renderHeader = (session: any) => {
        return (
            <>
                {
                    <Card className='bg-[#E7E7E8] p-1'>
                        <Card.Content>
                            <View className='flex flex-row items-center justify-between'>
                                <View className='flex flex-row items-center'>
                                    <View>
                                        <Image source={require('@/assets/images/pets 4.png')} />
                                    </View>
                                    <View className='ml-3'>
                                        <Text className='text-[#0D74B1] text-base font-medium ' style={{ fontFamily: "blod" }}>Tên: <Text className='!text-black' style={{ fontFamily: "medium" }}> {session.pet.name}</Text></Text>
                                        <Text className='text-[#0D74B1] text-base font-medium ' style={{ fontFamily: "blod" }}>Bệnh: <Text className='!text-black' style={{ fontFamily: "medium" }}>{session.diagnosis}</Text></Text>
                                    </View>
                                </View>
                                <View >
                                    <Image className='justify-end' source={require('@/assets/images/arrow_drop_down.png')} />
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                }

            </>
        );
    };
    const renderContent = (session: any) => {
        // console.log(session);
        return (
            <>
                <View className='bg-slate-100 rounded-2xl px-5 py-3'>
                    <View className='w-auto h-auto'>
                        {session?.medicines.map((medicine: any, index: number) =>
                            <View className='flex flex-row items-center justify-between mb-3' key={index}>
                                <View className='flex flex-row items-center'>
                                    <View>
                                        <Image source={require('@/assets/images/image.png')} />
                                    </View>
                                    <View className='ml-3'>
                                        <Text className='text-[#0D74B1] text-sm font-medium ' style={{ fontFamily: "blod" }}>{medicine.name}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ fontFamily: "blod" }}>x{medicine.quantity} / <Text>{medicine.calculate_unit}</Text></Text>
                                </View>
                            </View>
                        )}
                    </View>
                </View>
            </>
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
                            <Image className="w-36 h-32" source={require("@/assets/images/QR.png")} />
                            <Text className="text-sm mt-2" style={{ fontFamily: "medium" }}>QR will expire after {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</Text>
                            <Text className="items-center text-base mt-5" style={{ fontFamily: "blod" }}>Petcare thanks you for your favor!</Text>
                            <Button style={styles.buttonModal} onPress={hanldCancel} >
                                <Text className="font-bold text-base text-white text-center">Cancel</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
            <ScrollView>
                <View className='flex flex-col justify-between' style={{ height: hp(100), width: wp(100) }}>
                    <StatusBar barStyle="dark-content" />
                    <View>
                        <View className='mt-20 ml-12'>
                            {/* <Text style={styles.text_code}>#PC{(data as any)?.data.appointmentId}</Text> */}
                            <Text style={styles.text_code}>#PC{(data as any)?.data?.id}</Text>
                        </View>
                        <View className='px-4 py-4'>

                            {
                                isLoading ?
                                    <View className="flex flex-1 justify-center items-center h-[400px]">
                                        <Image className="w-56 h-24" source={require("@/assets/images/loading.gif")} />
                                        <Text className="text-[#ACACAD] font-bold" style={{ fontFamily: "blod" }}>Prescription loading...</Text>
                                    </View>
                                    :
                                    !isFetching &&
                                    <Accordion
                                        sections={(data as any)?.data.details || []}
                                        underlayColor='transparent'
                                        activeSections={activeSections}
                                        renderHeader={renderHeader}
                                        renderContent={renderContent}
                                        onChange={updateSections}
                                    />
                            }
                        </View>
                    </View>
                    <View className="w-full h-56 flex bg-slate-50 ">
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
                                        isLoading
                                            ?
                                            <Text className="text-base ml-4" style={{ fontFamily: "medium" }}>
                                                000.000 VND
                                            </Text>
                                            :
                                            <Text className="text-lg ml-4" style={{ fontFamily: "medium" }}>
                                                {Intl.NumberFormat("vi-VN", {}).format(
                                                    (data as any)?.data.total_money
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
                                <Text className="text-xl" style={{ fontFamily: "blod" }}>Approved</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>

    )
}

export default prescription

const styles = StyleSheet.create({
    text_code: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#0099CF"
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
})