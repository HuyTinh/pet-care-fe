import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';
import { Link } from 'expo-router';

const explore = () => {
  return (
    <View className='w-full h-full'>
      <View style={styles.square}>
        <View >
          <View className='mt-14 items-end px-5'>
            <Button mode="contained" className='w-36 h-14 flex justify-center !bg-[#0F74C1]'><Link href={"../(profile)/editprofile"} className='text-lg'>Edit profile</Link></Button>
          </View>
          <View className='items-center mt-5 static'>
            <Avatar.Image size={100} source={require('@/assets/images/26.png')} />
            <View>
              <Button className='absolute mt-[-35px] ' onPress={() => console.log("")}>
                <Image source={require('@/assets/images/plus.png')} />
              </Button>
            </View>
            <View>
              <Text className='text-xl font-bold mt-2 text-white'>Phuc Bao</Text>
              <Text className='text-xs font-medium opacity-50 text-white ml-[15px]'>ID: 012012</Text>
            </View>
          </View>
        </View>
      </View>
      <View className='p-7'>
        <Card style={styles.card}>
          <Link href={"../(changepassword)/confirm-email"}>
            <Card.Content className=' h-20'>
              <Image className='absolute top-[23] left-[25px]' source={require('@/assets/images/Lock.png')} />
              <Text className='absolute top-8 left-[85px] text-[17px] text-white font-medium'>Change Password</Text>
              <Image className='absolute top-7 left-[330px]' source={require('@/assets/images/navigate_next.png')} />
            </Card.Content>
          </Link>
        </Card>

        <Card style={styles.card} className='mt-7'>
          <Card.Content className=' h-20'>
            <Image className='absolute top-[23] left-[25px]' source={require('@/assets/images/Log out.png')} />
            <Text className='absolute top-8 left-[85px] font-semibold text-[15px] text-white'>Sign out</Text>
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
