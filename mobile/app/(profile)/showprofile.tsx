import { Image, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, IconButton } from 'react-native-paper'
import { Link, useNavigation } from 'expo-router';
import { useGetAllAccountQuery } from '@/pharmacist/pharmacist.service';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
const neweditprofile = () => {
    const { data, isLoading, isFetching, isError } = useGetAllAccountQuery()
    const navigation = useNavigation();
    function handleBack() {
        navigation.goBack();
    }
    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className='w-full h-full'>
                    <View style={styles.square}>
                        <View className='flex static'>
                            {/* <View className='mt-12 ml-12'>
                                <Text className='font-semibold text-lg text-white'>Information</Text>
                            </View> */}
                            <View className='absolute top-12'>
                                <Button onPress={handleBack}>
                                    <Image className='w-5 h-5 ml-3' source={require('@/assets/images/back2.png')} />
                                    <Text className='font-semibold text-lg text-white'>Information</Text>
                                </Button>
                            </View>
                            <View className='items-center !mt-32 '>
                                <Avatar.Image size={100} source={{ uri: (data as any)?.data.image }} style={{ backgroundColor: 'transparent' }} />
                                {/* <View>
                                    <Button className='absolute mt-[-35px]' onPress={() => console.log("")}>
                                        <Image source={require('@/assets/images/plus.png')} />
                                    </Button>
                                </View> */}
                            </View>
                            <View className='mt-6'>
                                <View className='pr-5'>
                                    <Card.Title
                                        title="User name"
                                        left={(props) => <FontAwesome name="user-circle-o" size={25} color="black" />}
                                        right={(props) => <Text className='font-medium text-base'>{(data as any)?.data.last_name} {(data as any)?.data.first_name}</Text>}
                                    />
                                </View>
                                <View className='pr-5'>
                                    <Card.Title
                                        title="Email"
                                        left={(props) => <MaterialIcons name="email" size={24} color="black" />}
                                        right={(props) => <Text className='font-medium text-base'>{(data as any)?.data.email}</Text>}
                                    />
                                </View>
                                <View className='pr-5'>
                                    <Card.Title
                                        title="Contact"
                                        left={(props) => <MaterialIcons name="perm-contact-cal" size={24} color="black" />}
                                        right={(props) => <Text className='font-medium text-base'>{(data as any)?.data.contact}</Text>}
                                    />
                                </View>
                                <View className='pr-5'>
                                    <Card.Title
                                        title="Birthday"
                                        left={(props) => <MaterialIcons name="today" size={24} color="black" />}
                                        right={(props) => <Text className='font-medium text-base'>{(data as any)?.data.birthday}</Text>}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className='mt-[460px] flex items-center'>
                        <Link href={"../(profile)/editprofile"} className='text-lg'>
                            <Button className='bg-[#0099CF] w-[350px] flex items-center justify-center h-14 ' onPress={() => console.log("hihi")}>
                                <AntDesign name="edit" size={20} color="white" /> 
                                <Text className='text-lg text-white'> Edit</Text>
                            </Button>
                        </Link>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

export default neweditprofile

const styles = StyleSheet.create({
    square: {
        width: '100%',
        height: '11%',
        backgroundColor: '#0099CF',

        borderWidth: 1,
        borderColor: '#0099CF',
    },
})