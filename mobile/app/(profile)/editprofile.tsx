import { StyleSheet, Text, View, Image, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { Controller, useForm } from 'react-hook-form';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { useNavigation } from 'expo-router';

const editprofile = () => {
  const {
    control,
    // handleSubmit,
    // formState: { errors },
    // reset
  } = useForm<any>();


  const navigation = useNavigation();
  
  const handleBack = () => {
    navigation.goBack(); 
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className='w-full h-full'>
          <View style={styles.square}>
            <View className='flex static'>
              <View className='absolute top-12'>
                <Button onPress={handleBack}>
                  <Image className='w-5 h-5 mt-7 ml-28' source={require('@/assets/images/back2.png')} />
                </Button>
              </View>
              <View className='items-center !mt-[120px] '>
                <Avatar.Image size={100} source={require('@/assets/images/26.png')} />
                <View>
                  <Button className='absolute mt-[-35px]' onPress={() => console.log("")}>
                    <Image source={require('@/assets/images/plus.png')} />
                  </Button>
                </View>
              </View>
            </View>
          </View>

          <View className='p-5'>
            <View>
              <Text style={styles.text} className='font-semibold'>User Name</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    selectionColor="#0099CF"
                    className='rounded-xl'
                    style={{
                      backgroundColor: "white",
                      borderWidth: 1,
                      borderColor: '#606060',
                    }}
                  />
                )}
                name="username"
              />
            </View>
            <View className='mt-3'>
              <Text style={styles.text} className='font-semibold'>Email</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    selectionColor="#0099CF"
                    className='rounded-xl'
                    style={{
                      backgroundColor: "white",
                      borderWidth: 1,
                      borderColor: '#606060',
                    }}
                  />
                )}
                name="email"
              />
            </View>
            <View className='mt-3'>
              <Text style={styles.text} className='font-semibold'>Contact</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    selectionColor="#0099CF"
                    className='rounded-xl'
                    style={{
                      backgroundColor: "white",
                      borderWidth: 1,
                      borderColor: '#606060',
                    }}
                  />
                )}
                name="username"
              />
            </View>
            <View className='mt-3'>
              <Text style={styles.text} className='font-semibold'>Birthday</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    selectionColor="#0099CF"
                    className='rounded-xl'
                    style={{
                      backgroundColor: "white",
                      borderWidth: 1,
                      borderColor: '#606060',
                    }}
                  />
                )}
                name="birthday"
              />
            </View>
          </View>

          <View className='mt-7 flex items-center'>
            <Button className='bg-[#0099CF] w-[350px] flex items-center justify-center h-14 ' onPress={() => console.log("hihi")}>
              <Text className='text-lg text-white'>Update</Text>
            </Button>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

export default editprofile

const styles = StyleSheet.create({
  square: {
    width: '100%',
    height: '35%',
    backgroundColor: '#0099CF',

    borderWidth: 1,
    borderBottomRightRadius: 25,
    borderColor: '#0099CF',
  },
  text: {
    color: '#4F4F4F',
    opacity: 0.5
  }
})