import { Image, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, Card, IconButton } from 'react-native-paper'
import { Link, router, useNavigation } from 'expo-router';
import { useGetAllAccountQuery } from '@/app/pharmacist.service';
import { AntDesign, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Account } from '@/types/account.type';
import { useDispatch } from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { startEditPrescription } from '../prescription.slice';
const neweditprofile = () => {
    const { data, isLoading, isFetching, isError } = useGetAllAccountQuery()
    const [user, setUser] = useState([])
    const navigation = useNavigation();
    const distpath = useDispatch()
    function handleBack() {
        navigation.goBack();
    }
    function handleEdit(id : any){
        distpath(startEditPrescription(id))
        router.replace("../(profile)/editprofile")   
    }
    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View className='w-full h-full'>
                    <View style={styles.square}>
                        <TouchableOpacity onPress={handleBack}>
                            <View className=' flex-row items-center mt-14'>
                                <View className='ml-3'>
                                    <Image
                                        source={require("@/assets/images/back2.png")}
                                        style={styles.backIcon}
                                    />
                                </View>
                                <View className='ml-2'>
                                    <Text className='text-white text-xl ' style={{ fontFamily: "bold" }}>Infomation</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                    {
                        ((data as any)?.data as Account[])?.map((profile: any) => (
                            <>
                                <View className='flex static' key={profile.id}>
                                    <View className='items-center !mt-10 '>
                                        <Avatar.Image size={100} source={{ uri: profile.image_url }} style={{ backgroundColor: 'transparent' }} />
                                    </View>
                                    <View className='mt-6'>
                                        <View className='pr-5'>
                                            <Card.Title
                                                title="User name"
                                                left={(props) => <FontAwesome name="user-circle-o" size={25} color="black" />}
                                                right={(props) => <Text className='font-medium text-base' style={{ fontFamily: "medium" }}>{profile.last_name} {profile.first_name}</Text>}
                                            />
                                        </View>
                                        <View className='pr-5'>
                                            <Card.Title
                                                title="Email"
                                                left={(props) => <MaterialIcons name="email" size={24} color="black" />}
                                                right={(props) => <Text className='font-medium text-base' style={{ fontFamily: "medium" }}>{profile.email}</Text>}
                                            />
                                        </View>
                                        <View className='pr-5'>
                                            <Card.Title
                                                title="Phone number"
                                                left={(props) => <MaterialIcons name="perm-contact-cal" size={24} color="black" />}
                                                right={(props) => <Text className='font-medium text-base' style={{ fontFamily: "medium" }}>{profile.phone_number}</Text>}
                                            />
                                        </View>
                                        <View className='pr-5'>
                                            <Card.Title
                                                title="Gender"
                                                left={(props) => <FontAwesome5 name="transgender" size={24} color="black" />}
                                                right={(props) => <Text className='font-medium text-base' style={{ fontFamily: "medium" }}>{profile.gender}</Text>}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View className='mt-[20px] flex items-center'>
                                    {/* <Link href={"../(profile)/editprofile"} className='text-lg'> */}
                                    <Button className='bg-[#0099CF] w-[350px] flex items-center justify-center h-14 ' onPress={() => handleEdit(profile.id)}>
                                        <AntDesign name="edit" size={20} color="white" />
                                        <Text className='text-lg text-white' style={{ fontFamily: "blod" }}> Edit</Text>
                                    </Button>
                                    {/* </Link> */}
                                </View>
                            </>
                        ))
                    }
                </View>
            </TouchableWithoutFeedback >
        </>
    )
}

export default neweditprofile

const styles = StyleSheet.create({
    square: {
        width: '100%',
        height: '10%',
        backgroundColor: '#0099CF',

        borderWidth: 1,
        borderColor: '#0099CF',
    },
    backIcon: {
        width: wp("5%"),
        height: wp("5%"),
        tintColor: "white",
    },
})