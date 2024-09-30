import { StyleSheet, Text, View, Image, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Button, Card, Searchbar } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import Accordion from 'react-native-collapsible/Accordion'
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useGetAppointmentQuery } from '@/pharmacist/pharmacist.service';
import { Appointment } from '@/pharmacist/appointment/Appointment.type'; 

const Home = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
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
    const { data, isLoading, isFetching, isError } = useGetAppointmentQuery()
    return (
            // <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <GestureHandlerRootView style={{}}>
                        <BottomSheetModalProvider>
                            <View className='w-full h-full mt-16'>
                                <View className='flex-row gap-y-5 static px-5 py-5 justify-between items-center'>
                                    <View>
                                        <Searchbar
                                            style={styles.searchbar}
                                            placeholder="Search list customer"
                                            onChangeText={setSearchQuery}
                                            value={searchQuery}
                                        />
                                    </View>
                                    <View>
                                        <Avatar.Image size={55} source={require('@/assets/images/26.png')} />
                                    </View>
                                </View>
                                <ScrollView>
                                <View className='px-3 py-1 static'>
                                    <View className='flex-row items-center'>
                                        <View>
                                            <View style={styles.square} />
                                            <Image className='absolute ml-[14px] mt-[8px] ' source={require('@/assets/images/calendar.png')} />
                                        </View>
                                        <View className='ml-[5.5px]'>
                                            <Text className='text-[50px] font-bold text-[#0099CF]'>11</Text>
                                        </View>
                                        <View className='ml-[5.5px]'>
                                            <Text className='text-sm text-[#0099CF] opacity-50 font-bold'>Wednesday</Text>
                                            <Text className='text-sm text-[#0099CF]'>September 2024</Text>
                                        </View>
                                        <View className='ml-[75px]'>
                                            <Text className='text-4xl text-[#0099CF] font-bold'>Today</Text>
                                        </View>
                                    </View>
                                </View>
                                <View className=' p-5  '>
                                    {!isFetching && ((data as any)?.data as Appointment[]).map((appointment) => (
                                        <Card className='bg-[#E7E7E8] mb-5' onPress={handlePresentModalPress}>
                                            <Card.Content>
                                                <Text className='font-bold text-lg text-[#0D74B1]'>#PC{appointment.appointmentId}</Text>
                                                <Text className='text-[#0D74B1] text-base font-medium'>Họ và tên: <Text className='!text-black'>{appointment.fullName}</Text></Text>
                                                <Text className='text-[#0D74B1] text-base font-medium'>Số điện thoại: <Text className='!text-black'>{appointment.phoneNumber}</Text></Text>
                                                <Image className='absolute top-6 right-4' source={require('@/assets/images/pets 4.png')} />
                                            </Card.Content>
                                        </Card>
                                    ))}
                                    <BottomSheetModal
                                        ref={bottomSheetModalRef}
                                        index={1}
                                        snapPoints={snapPoints}
                                    // handleIndicatorStyle={{ display: "none" }}
                                    >
                                        <BottomSheetView >
                                            <View>
                                                <Text className='text-xl font-bold ml-4'>#PC1012</Text>
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
                                            <View className='flex flex-row justify-between px-5'>
                                                <View >
                                                    <Text className='font-bold text-2xl text-[#0D74B1]'>Medical total</Text>
                                                    <Text className='text-base ml-4'>200.000 VNĐ</Text>
                                                </View>
                                                <View>
                                                    <Button mode="contained" className='w-40 h-14 flex justify-center !bg-[#0F74C1]'><Text className='text-base font-bold'>Approved</Text></Button>
                                                </View>
                                            </View>
                                        </BottomSheetView>
                                    </BottomSheetModal>
                                </View >
                                </ScrollView>
                            </View >
                        </BottomSheetModalProvider>
                    </GestureHandlerRootView>
                </TouchableWithoutFeedback>
             
    )
}

export default Home
const styles = StyleSheet.create({
    searchbar: {
        width: 320,
        backgroundColor: 'rgba(0, 0, 0, 0.01)',
        borderWidth: 1,
        borderColor: '#0099CF',
    },
    square: {
        width: 60,
        height: 50,
        borderRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.01)',

        // Viền 
        borderWidth: 1.25,
        borderColor: '#0D74B1',
    },
    contentContainer: {
        padding: 15
    },
})