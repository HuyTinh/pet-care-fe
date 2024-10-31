import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, Card } from 'react-native-paper';
import Accordion from 'react-native-collapsible/Accordion'
import { useSelector } from 'react-redux';
import { useGetPrescriptionByAppointmentIdQuery } from '@/app/pharmacist.service';
import { RootState } from '@/store/store';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const prescription = () => {

    const [activeSections, setActiveSections] = useState([])

    const updateSections = (activeSections: any) => {
        setActiveSections(activeSections)
    }
    const presrptionId = useSelector((state: RootState) => state.prescription.id);

    const { data, isFetching, isLoading } = useGetPrescriptionByAppointmentIdQuery(presrptionId, {
        skip: !presrptionId
    })
    const renderHeader = (session: any) => {
        return (
            <>
                {
                    <Card className='bg-[#E7E7E8] mt-5 p-1'>
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
                <View className='bg-[#E7E7E8] rounded-2xl px-5 py-3'>
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
        <ScrollView>
            <View className='flex flex-col justify-between' style={{ height: hp(100), width: wp(100) }}>
                <View>
                    <View className='mt-20 ml-12'>
                        {/* <Text style={styles.text_code}>#PC{(data as any)?.data.appointmentId}</Text> */}
                        <Text style={styles.text_code}>#PC{(data as any).data?.id}</Text>
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
                <View className='flex flex-row justify-between px-5 pb-10 '>
                    <View >
                        <Text className='font-bold text-2xl text-[#0D74B1]' style={{ fontFamily: "blod" }}>Medical total</Text>
                        <Text className='text-base ml-4' style={{ fontFamily: "medium" }}>{Intl.NumberFormat('vi-VN', {
                        }).format((data as any)?.data.total_money)} VND</Text>
                    </View>
                    <View>
                        <Button mode="contained" className='w-40 h-14 flex justify-center !bg-[#0F74C1]'><Text className='text-base font-bold' style={{ fontFamily: "blod" }}>Approved</Text></Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default prescription

const styles = StyleSheet.create({
    text_code: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#0099CF"
    }
})