import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';
import { Link,router } from 'expo-router';
import { useGetAllAccountQuery } from '@/pharmacist/pharmacist.service';
import * as SecureStore from 'expo-secure-store';
const explore = () => {
  const { data, isLoading, isFetching, isError } = useGetAllAccountQuery()
  const handlDeleteTonken = async () => {
    await SecureStore.deleteItemAsync("token")
    router.replace("/(auth)")
  }
  return (
    <View className='h-full w-full'>
      <View style={styles.square}>
        <View >
          {/* <View className='mt-14 items-end px-5'>
            <Button mode="contained" className='w-36 h-14 flex justify-center !bg-[#0F74C1]'><Link href={"../(profile)/editprofile"} className='text-lg'>Edit profile</Link></Button>
          </View> */}
          <View className='items-center mt-28 static'>
            <Avatar.Image size={100} source={{ uri: (data as any)?.data.image }} />
            <View>
              <Text className='text-xl font-bold mt-2 text-white' style={{fontFamily: "blod"}}>Phuc Bao</Text>
              <Text className='text-xs font-medium opacity-50 text-white ml-[15px]' style={{fontFamily: "blod"}}>ID:<Text style={{fontFamily: "medium"}}>012012</Text> </Text>
            </View>
          </View>
        </View>
      </View>
      <View className='p-7'>
        <Card style={styles.card}>
          <Link href={"../(profile)/showprofile"}>
            <Card.Content className=' h-20'>
              <Image className='absolute top-[23] left-[25px]' source={require('@/assets/images/Edit.png')} />
              <Text className='absolute top-8 left-[85px] text-[17px] text-white font-medium'  style={{fontFamily: "blod"}}>My profile</Text>
              <Image className='absolute top-7 left-[330px]' source={require('@/assets/images/navigate_next.png')} />
            </Card.Content>
          </Link>
        </Card>
        <Card style={styles.card} className='mt-7'>
          <Link href={"../(changepassword)/confirm-email"}>
            <Card.Content className=' h-20'>
              <Image className='absolute top-[23] left-[25px]' source={require('@/assets/images/Lock.png')} />
              <Text className='absolute top-8 left-[85px] text-[17px] text-white font-medium' style={{fontFamily: "blod"}}>Change Password</Text>
              <Image className='absolute top-7 left-[330px]' source={require('@/assets/images/navigate_next.png')} />
            </Card.Content>
          </Link>
        </Card>
        <Card style={styles.card} className='mt-7' onPress={handlDeleteTonken}>
          <Card.Content className=' h-20'>
            <Image className='absolute top-[23] left-[25px]' source={require('@/assets/images/Log out.png')} />
            <Text className='absolute top-8 left-[85px] font-semibold text-[15px] text-white' style={{fontFamily: "blod"}}>Sign out</Text>
            <Image className='absolute top-7 right-4' source={require('@/assets/images/navigate_next.png')} />
          </Card.Content>
        </Card>

      </View>
    </View >
  )
}

export default explore
const styles = StyleSheet.create({
  square: {
    width: '100%',
    height: '40%',
    backgroundColor: '#0099CF',

    borderWidth: 1,
    borderBottomRightRadius: 25,
    borderColor: '#0099CF',
  },
  card: {
    backgroundColor: '#0099CF', //rgba(0, 153,207,0.1)
  }

})
