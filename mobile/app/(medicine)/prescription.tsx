import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Button, Card, Searchbar } from 'react-native-paper';
import Accordion from 'react-native-collapsible/Accordion'
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux';
import { useGetAppointmentByIdQuery } from '@/pharmacist/pharmacist.service';
import { RootState } from '@/pharmacist/store';
import { Appointment } from '@/pharmacist/appointment/Appointment.type';
import { AppointmentDetail } from '@/pharmacist/appointmentdetail/AppointmentDetail.type';
import { Pet } from '@/pharmacist/pet/Pet.type';
const prescription = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    // variables
    const snapPoints = useMemo(() => ['25%', '50%', '75%', '90%'], []);
    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const [activeSections, setActiveSections] = useState([])

    const updateSections = (activeSections: any) => {
        setActiveSections(activeSections)
    }

    const SECTIONS = [
        {
            name: 'Hieu',
            patient: 'Lun',
            medicine: {
                id_medicine: "SEMCTA",
                name: "Thuốc này kia",
                quantity: 2,
                option: "Vien"
            }
        },
        {
            name: 'Vua',
            patient: 'Lun',
            medicine: {
                id_medicine: "SEMCTA",
                name: "Thuốc này kia",
                quantity: 2,
                option: "Hop"
            }
        },
    ];
    const renderHeader = (session: any) => {
        return (
            <Card className='bg-[#E7E7E8] mt-5 p-1'>
                <Card.Content>
                    <View className='flex flex-row items-center'>
                        <Image source={require('@/assets/images/pets 4.png')} />
                        <View className='left-4'>
                            <Text className='text-[#0D74B1] text-base font-medium '>Tên: <Text className='!text-black'> {session.name}</Text></Text>
                            <Text className='text-[#0D74B1] text-base font-medium '>Bệnh: <Text className='!text-black'>{session.patient}</Text></Text>
                        </View>
                        <View className='left-52'>
                            <Image source={require('@/assets/images/arrow_drop_down.png')} />
                        </View>
                    </View>
                </Card.Content>
            </Card>
        );
    };
    const renderContent = (session: any) => {
        return (
            <Card className='bg-[#E7E7E8]  w-96 flex left-[6px]'>
                <Card.Content>
                    <View className='flex flex-row items-center'>
                        <Image source={require('@/assets/images/image.png')} />
                        <View className='left-4'>
                            <Text className='text-[#0D74B1] text-sm font-medium '>{session.medicine.name}</Text>
                            <Text className='text-[#0D74B1] text-base font-medium '>Mã sản phẩm: <Text className='!text-black font-bold'>{session.medicine.id_medicine}</Text></Text>
                        </View>
                        <View className='left-[74px]'>
                            <Text>x{session.medicine.quantity} / <Text>{session.medicine.option}</Text></Text>
                        </View>
                    </View>
                </Card.Content>
                <Card.Content>
                    <View className='flex flex-row items-center mt-5'>
                        <Image source={require('@/assets/images/image.png')} />
                        <View className='left-4'>
                            <Text className='text-[#0D74B1] text-sm font-medium '>{session.medicine.name}</Text>
                            <Text className='text-[#0D74B1] text-base font-medium '>Mã sản phẩm: <Text className='!text-black font-bold'>{session.medicine.id_medicine}</Text></Text>
                        </View>
                        <View className='left-[74px]'>
                            <Text>x{session.medicine.quantity} / <Text>{session.medicine.option}</Text></Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        );
    };

    const appointmentId = useSelector((state: RootState) => state.prescription.prescriptionId);
    const { data } = useGetAppointmentByIdQuery(appointmentId, { skip: !appointmentId })

    

    return (
        <ScrollView>
        <View className='flex flex-col justify-between h-full'>
            <View>
                <View className='mt-20 ml-12'>
                    <Text style={styles.text_code}>#PC1012</Text>
                </View>
                <View className='px-4 py-4'>
                    <Accordion
                        sections={SECTIONS}
                        activeSections={activeSections}
                        renderHeader={renderHeader}
                        renderContent={renderContent}
                        onChange={updateSections}
                    />
                </View>
            </View>
            <View className='flex flex-row justify-between px-5 pb-10'>
                <View >
                    <Text className='font-bold text-2xl text-[#0D74B1]'>Medical total</Text>
                    <Text className='text-base ml-4'>200.000 VNĐ</Text>
                </View>
                <View>
                    <Button mode="contained" className='w-40 h-14 flex justify-center !bg-[#0F74C1]'><Text className='text-base font-bold'>Approved</Text></Button>
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