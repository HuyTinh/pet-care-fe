import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Card, Searchbar } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';

const Home = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    return (
     
            
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
                        <Card className='bg-[#E7E7E8] mb-5'>
                            <Card.Content>
                                <Text className='font-bold text-lg text-[#0D74B1]'>#PC1012</Text>
                                <Text className='text-[#0D74B1] text-base font-medium'>Thú cưng: <Text className='!text-black'>Cogi</Text></Text>
                                <Text className='text-[#0D74B1] text-base font-medium'>Bệnh: <Text className='!text-black'>Lùn</Text></Text>
                                <Image className='absolute top-6 right-4' source={require('@/assets/images/pets 4.png')} />
                            </Card.Content>
                        </Card>
                    <Card className='bg-[#E7E7E8] mb-5'>
                        <Card.Content >
                            <Text className='font-bold text-lg text-[#0D74B1]'>#PC1012</Text>
                            <Text className='text-[#0D74B1] text-base font-medium'>Thú cưng: <Text className='!text-black'>Cogi</Text></Text>
                            <Text className='text-[#0D74B1] text-base font-medium'>Bệnh: <Text className='!text-black'>Lùn</Text></Text>
                            <Image className='absolute top-6 right-4' source={require('@/assets/images/pets 4.png')} />
                        </Card.Content>
                    </Card>
                    <Card className='bg-[#E7E7E8] mb-5'>
                        <Card.Content >
                            <Text className='font-bold text-lg text-[#0D74B1]'>#PC1012</Text>
                            <Text className='text-[#0D74B1] text-base font-medium'>Thú cưng: <Text className='!text-black'>Cogi</Text></Text>
                            <Text className='text-[#0D74B1] text-base font-medium'>Bệnh: <Text className='!text-black'>Lùn</Text></Text>
                            <Image className='absolute top-6 right-4' source={require('@/assets/images/pets 4.png')} />
                        </Card.Content>
                    </Card>
                    <Card className='bg-[#E7E7E8] mb-5'>
                        <Card.Content >
                            <Text className='font-bold text-lg text-[#0D74B1]'>#PC1012</Text>
                            <Text className='text-[#0D74B1] text-base font-medium'>Thú cưng: <Text className='!text-black'>Cogi</Text></Text>
                            <Text className='text-[#0D74B1] text-base font-medium'>Bệnh: <Text className='!text-black'>Lùn</Text></Text>
                            <Image className='absolute top-6 right-4' source={require('@/assets/images/pets 4.png')} />
                        </Card.Content>
                    </Card>
                </View>
            </View>
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
    }
})