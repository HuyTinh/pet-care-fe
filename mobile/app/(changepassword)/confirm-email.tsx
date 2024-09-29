import { StyleSheet, Text, View, Image, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Button, TextInput } from 'react-native-paper';
import { Link } from 'expo-router';
import { useNavigation } from 'expo-router';

const confirmEmail = () => {
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
      <View className='w-full h-full'>
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
            <Text className='text-2xl font-bold'>Change your Password</Text>
            <Text className='text-base text-center opacity-50'>You need to confirm your email to receive the code to change your password.</Text>
          </View>
        </View>

        <View className='px-3 mt-10'>
          <Text style={styles.text} className='font-semibold'>Email</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (

              <TextInput
                className='mt-3'
                mode='outlined'
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
              />

            )}
            name="email"
          />
        </View>
        <View className='mt-7 flex items-center'>
          <Button className='bg-[#0099CF] w-[400px] flex items-center justify-center h-14 ' onPress={() => console.log("hihi")}>
            <Text className='text-lg text-white'><Link href={"./verify"} className='text-lg'>Update</Link></Text>
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default confirmEmail

const styles = StyleSheet.create({
  text: {
    color: '#4F4F4F',
    opacity: 0.5
  }
})