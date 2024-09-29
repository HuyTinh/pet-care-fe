import { Image, Text, View, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Controller, useForm } from "react-hook-form";
import { Button, TextInput } from 'react-native-paper';
import { CheckBox } from 'react-native-elements'
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { useCameraPermissions } from 'expo-camera';


const Auth = () => {
  const {
    control,
    // handleSubmit,
    // formState: { errors },
    // reset
  } = useForm<any>();
  const [isSelected, setSelection] = useState(false);
  const [permisson, requestPermissions] = useCameraPermissions()
  return (
    <View  className='w-full h-full bg-[#0099CF]'>
      <View className='flex'>
        <View className='mt-20 static'>
          <View style={styles.circle_1} />
          <Image className='ml-36' source={require('@/assets/images/Logo2.png')} />
        </View>
        <View>
          <Text className='ml-[100px] mt-4 text-[58px] font-bold text-white'>Pet care</Text>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className='px-12 mt-32'>
          <View style={styles.circle_2} />
          <View className=' static w-full h-10'>
            {/* <Image className='ml-4 absolute mt-5' source={require('@/assets/images/mail 1.png')} /> */}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (

                <TextInput
                  style={styles.icon_1}
                  className='rounded-full p-[1.75px] font-bold text-[#726E6E]'
                  label="Email"
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  left={<TextInput.Icon icon="email" />}
                />


              )}
              name="email"
            />
          </View>
          <View className=' mt-14 static w-full h-10'>
            {/* <Image className='ml-[270px] absolute mt-3 ' source={require('@/assets/images/Key.png')} /> */}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.icon_1}
                  className='rounded-full p-[2px] font-bold text-[#726E6E]'
                  label="Password"
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  left={<TextInput.Icon icon="key" />}
                />
              )}
              name="password"
            />
          </View>
          <View className='mt-10 '>
            <View >
              <CheckBox
                title='Remember Me?'
                checked={true}
                containerStyle={{
                  backgroundColor: "transparent",
                  borderWidth: 0,
                }}
                textStyle={{
                  color: "white",
                  fontSize: 16
                }}
                checkedColor='white'
              />
            </View>
            <Button onPress={requestPermissions}> Allow camera approve</Button>
            <View className='absolute top-[14px] right-5'><Link href={"../(forgotpassword)/forgot-confirm-email"} className='text-white text-base font-medium '>Fogot Password!</Link></View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View className='mt-7 ml-24'>
        <Button mode="contained" className='w-56 h-14 flex justify-center !bg-[#0F74C1]'><Link href={"./(tabs)/list"} className='text-lg'>Login</Link></Button>
      </View>
    </View >
  )
}
const styles = StyleSheet.create({
  circle_1: {
    width: 600,              // Chiều rộng hình tròn
    height: 600,             // Chiều cao hình tròn (bằng với chiều rộng)
    borderRadius: 300,        // Độ cong viền = 1/2 chiều rộng để tạo hình tròn
    backgroundColor: 'rgba(0, 0, 0, 0.01)', // Màu nền đen với độ trong suốt 0.2
    position: 'absolute',
    top: -320,
    left: -70,

    // Viền 
    borderWidth: 5,
    borderColor: '#0D74B1',

    // Bóng cho 
    shadowColor: '#0D74B1',     // Màu của bóng
    shadowOffset: { width: 1, height: 5 },  // Độ dịch chuyển của bóng
    shadowOpacity: 0.5,     // Độ trong suốt của bóng
    shadowRadius: 0.25,      // Độ mờ của bóng
  },
  icon_1: {
    zIndex: -1,
  },
  circle_2: {
    width: 800,              // Chiều rộng hình tròn
    height: 600,             // Chiều cao hình tròn (bằng với chiều rộng)
    borderRadius: 400,        // Độ cong viền = 1/2 chiều rộng để tạo hình tròn
    backgroundColor: 'rgba(0, 0, 0, 0.01)', // Màu nền đen với độ trong suốt 0.2
    position: 'absolute',
    top: -50,
    right: -500,

    // Viền 
    borderWidth: 5,
    borderColor: '#0D74B1',

    // Bóng cho 
    shadowColor: '#0D74B1',     // Màu của bóng
    shadowOffset: { width: 1, height: 5 },  // Độ dịch chuyển của bóng
    shadowOpacity: 0.5,     // Độ trong suốt của bóng
    shadowRadius: 0.25,      // Độ mờ của bóng
  }
});

export default Auth