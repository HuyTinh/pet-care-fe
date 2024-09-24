import { StyleSheet, Text, View, Image, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { Button, Card, Searchbar } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Home = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    // variables
    const snapPoints = useMemo(() => ['25%', '50%', '75%', '90%'], []);
    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    // const handleSheetChanges = useCallback((index: number) => {
    //     console.log('handleSheetChanges', index);
    // }, []);
    return (
        <>
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
                                <Card className='bg-[#E7E7E8] mb-5' onPress={handlePresentModalPress}>
                                    <Card.Content>
                                        <Text className='font-bold text-lg text-[#0D74B1]'>#PC1013</Text>
                                        <Text className='text-[#0D74B1] text-base font-medium'>Họ và tên: <Text className='!text-black'>Ha Cogi Hieu</Text></Text>
                                        <Text className='text-[#0D74B1] text-base font-medium'>Số điện thoại: <Text className='!text-black'>0101010101</Text></Text>
                                        <Image className='absolute top-6 right-4' source={require('@/assets/images/pets 4.png')} />
                                    </Card.Content>
                                </Card>
                                <Card className='bg-[#E7E7E8] mb-5'>
                                    <Card.Content>
                                        <Text className='font-bold text-lg text-[#0D74B1]'>#PC1012</Text>
                                        <Text className='text-[#0D74B1] text-base font-medium'>Họ và tên: <Text className='!text-black'>Ha Cogi Hieu</Text></Text>
                                        <Text className='text-[#0D74B1] text-base font-medium'>Số điện thoại: <Text className='!text-black'>0101010101</Text></Text>
                                        <Image className='absolute top-6 right-4' source={require('@/assets/images/pets 4.png')} />
                                    </Card.Content>
                                </Card>
                                <Card className='bg-[#E7E7E8] mb-5'>
                                    <Card.Content>
                                        <Text className='font-bold text-lg text-[#0D74B1]'>#PC1012</Text>
                                        <Text className='text-[#0D74B1] text-base font-medium'>Họ và tên: <Text className='!text-black'>Ha Cogi Hieu</Text></Text>
                                        <Text className='text-[#0D74B1] text-base font-medium'>Số điện thoại: <Text className='!text-black'>0101010101</Text></Text>
                                        <Image className='absolute top-6 right-4' source={require('@/assets/images/pets 4.png')} />
                                    </Card.Content>
                                </Card>
                                <Card className='bg-[#E7E7E8] mb-5'>
                                    <Card.Content>
                                        <Text className='font-bold text-lg text-[#0D74B1]'>#PC1012</Text>
                                        <Text className='text-[#0D74B1] text-base font-medium'>Họ và tên: <Text className='!text-black'>Ha Cogi Hieu</Text></Text>
                                        <Text className='text-[#0D74B1] text-base font-medium'>Số điện thoại: <Text className='!text-black'>0101010101</Text></Text>
                                        <Image className='absolute top-6 right-4' source={require('@/assets/images/pets 4.png')} />
                                    </Card.Content>
                                </Card>

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
                                                <Card className='bg-[#E7E7E8] mb-5 p-1'>
                                                    <Card.Content>
                                                        <View className='flex flex-row items-center'>
                                                            <Image source={require('@/assets/images/pets 4.png')} />
                                                            <View className='left-4'>
                                                                <Text className='text-[#0D74B1] text-base font-medium '>Tên: <Text className='!text-black'> Hieu</Text></Text>
                                                                <Text className='text-[#0D74B1] text-base font-medium '>Bệnh: <Text className='!text-black'>Lùn</Text></Text>
                                                            </View>
                                                            <View className='left-52'>
                                                                <Image source={require('@/assets/images/arrow_drop_down.png')} />
                                                            </View>
                                                        </View>
                                                    </Card.Content>
                                                </Card>
                                                <Card className='bg-[#E7E7E8] mb-5 p-1'>
                                                    <Card.Content>
                                                        <View className='flex flex-row items-center'>
                                                            <Image source={require('@/assets/images/pets 4.png')} />
                                                            <View className='left-4'>
                                                                <Text className='text-[#0D74B1] text-base font-medium '>Tên: <Text className='!text-black'> Vua</Text></Text>
                                                                <Text className='text-[#0D74B1] text-base font-medium '>Bệnh: <Text className='!text-black'>Lùn</Text></Text>
                                                            </View>
                                                            <View className='left-52'>
                                                                <Image source={require('@/assets/images/arrow_drop_down.png')} />
                                                            </View>
                                                        </View>
                                                    </Card.Content>
                                                </Card>
                                                <Card className='bg-[#E7E7E8] mb-5 p-1'>
                                                    <Card.Content>
                                                        <View className='flex flex-row items-center'>
                                                            <Image source={require('@/assets/images/pets 4.png')} />
                                                            <View className='left-4'>
                                                                <Text className='text-[#0D74B1] text-base font-medium '>Tên: <Text className='!text-black'> Vua</Text></Text>
                                                                <Text className='text-[#0D74B1] text-base font-medium '>Bệnh: <Text className='!text-black'>Lùn</Text></Text>
                                                            </View>
                                                            <View className='left-52'>
                                                                <Image source={require('@/assets/images/arrow_drop_down.png')} />
                                                            </View>
                                                        </View>
                                                    </Card.Content>
                                                </Card>
                                                <Card className='bg-[#E7E7E8] mb-5 p-1'>
                                                    <Card.Content>
                                                        <View className='flex flex-row items-center'>
                                                            <Image source={require('@/assets/images/pets 4.png')} />
                                                            <View className='left-4'>
                                                                <Text className='text-[#0D74B1] text-base font-medium '>Tên: <Text className='!text-black'> Vua</Text></Text>
                                                                <Text className='text-[#0D74B1] text-base font-medium '>Bệnh: <Text className='!text-black'>Lùn</Text></Text>
                                                            </View>
                                                            <View className='left-52'>
                                                                <Image source={require('@/assets/images/arrow_drop_down.png')} />
                                                            </View>
                                                        </View>
                                                    </Card.Content>
                                                </Card>
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
                        </View >
                    </BottomSheetModalProvider>
                </GestureHandlerRootView>
            </TouchableWithoutFeedback>
        </>
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