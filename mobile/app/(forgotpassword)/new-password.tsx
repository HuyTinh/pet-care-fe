import { StyleSheet, Text, View, Image, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Button, TextInput } from 'react-native-paper';
import { Link, useNavigation } from 'expo-router';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const newpassword = () => {
    const {
        control,
        // handleSubmit,
        // formState: { errors },
        // reset
    } = useForm<any>();
    const navigation = useNavigation();
    function handleBack() {
        navigation.goBack();
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{height: hp(100), width: wp(100)}}>
                <View className='flex'>
                    <View className='absolute top-12'>
                        <Button onPress={handleBack}>
                            <Image className='w-7 h-7' source={require('@/assets/images/back.png')} />
                        </Button>
                    </View>
                    <View className='mt-20 items-center '>
                        <Image className='absolute ml-[14px]  w-[269px] h-[136px]' source={require('@/assets/images/logo-removebg-preview.png')} />
                    </View>
                </View>
                <View className='flex mt-36'>
                    <View className='items-center justify-center px-[64px]'>
                        <Text className='text-2xl font-bold'>Enter new Password</Text>
                        <Text className='text-base text-center opacity-50'>Please enter your new password </Text>
                    </View>
                </View>

                <View className='px-3 mt-2'>
                    <Text style={styles.text} className='font-semibold'>Password</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (

                            <TextInput
                                className='mt-3 rounded-xl'
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                selectionColor="#0099CF"
                                style={{
                                  backgroundColor: "white",
                                  borderWidth: 1,
                                  borderColor: '#606060',
                                }}
                            />

                        )}
                        name="password"
                    />
                </View>
                <View className='px-3 mt-5'>
                    <Text style={styles.text} className='font-semibold'>Confirm Password</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (

                            <TextInput
                                className='mt-3 rounded-xl'
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                selectionColor="#0099CF"
                                style={{
                                  backgroundColor: "white",
                                  borderWidth: 1,
                                  borderColor: '#606060',
                                }}
                            />

                        )}
                        name="password"
                    />
                </View>
                <View className='mt-9 flex items-center'>
                    <Button className='bg-[#0099CF] w-[380px] flex items-center justify-center h-14 ' onPress={() => console.log("")}>
                        <Text className='text-lg text-white'><Link href={"./verify"} className='text-lg'>Confirm Password</Link></Text>
                    </Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default newpassword

const styles = StyleSheet.create({
    text: {
        color: '#4F4F4F',
        opacity: 0.5
    },
})