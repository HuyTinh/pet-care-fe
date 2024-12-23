import { Image, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

import { Avatar, Button, Card, IconButton } from 'react-native-paper'
import { Link, useNavigation } from 'expo-router';
import { useGetEmployeeByAccountIdQuery } from '@/app/pharmacist.service';
import { AntDesign, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { RootState } from '@/store/store';

const NewEditProfile = () => {

    // Get profile ID from Redux store
    const profileId = useSelector((state: RootState) => state.pharmacist.id);

    // Fetch employee profile data using the profileId
    const { data: profileData, isLoading: _ } = useGetEmployeeByAccountIdQuery(profileId, {
        skip: !profileId // Skip the query if no profileId
    });

    const navigation = useNavigation();

    // Function to navigate back to the previous screen
    const handleBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        // Dismiss keyboard when clicking outside input fields
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className='w-full h-full'>
                {/* Header with back button */}
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
                                <Text className='text-white text-xl ' style={{ fontFamily: "bold" }}>Information</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Profile data display section */}
                <View className='flex static' key={(profileData as any)?.data.id}>
                    {/* Avatar */}
                    <View className='items-center !mt-10 '>
                        <Avatar.Image
                            size={100}
                            source={{ uri: (profileData as any)?.data.image_url }} // Display profile image from API data
                            style={{ backgroundColor: 'transparent' }}
                        />
                    </View>

                    {/* Profile details (name, email, phone, gender) */}
                    <View className='mt-6'>
                        <View className='pr-5'>
                            <Card.Title
                                title="User name"
                                left={(props) => <FontAwesome name="user-circle-o" size={25} color="black" />}
                                right={(props) => <Text className='font-medium text-base' style={{ fontFamily: "medium" }}>
                                    {(profileData as any)?.data.last_name} {(profileData as any)?.data.first_name}
                                </Text>}
                            />
                        </View>
                        <View className='pr-5'>
                            <Card.Title
                                title="Email"
                                left={(props) => <MaterialIcons name="email" size={24} color="black" />}
                                right={(props) => <Text className='font-medium text-base' style={{ fontFamily: "medium" }}>
                                    {(profileData as any)?.data.email}
                                </Text>}
                            />
                        </View>
                        <View className='pr-5'>
                            <Card.Title
                                title="Phone number"
                                left={(props) => <MaterialIcons name="perm-contact-cal" size={24} color="black" />}
                                right={(props) => <Text className='font-medium text-base' style={{ fontFamily: "medium" }}>
                                    {(profileData as any)?.data.phone_number}
                                </Text>}
                            />
                        </View>
                        <View className='pr-5'>
                            <Card.Title
                                title="Gender"
                                left={(props) => <FontAwesome5 name="transgender" size={24} color="black" />}
                                right={(props) => <Text className='font-medium text-base' style={{ fontFamily: "medium" }}>
                                    {(profileData as any)?.data.gender}
                                </Text>}
                            />
                        </View>
                    </View>
                </View>

                {/* Button to navigate to Edit Profile page */}
                <View style={styles.buttonContainer}>
                    <Link href={"../(profile)/edit-profile"}>
                        <Button
                            mode="contained"
                            style={styles.button}
                            labelStyle={styles.buttonText}
                        >
                            {/* Edit icon on the button */}
                            <AntDesign name="edit" size={18} color="white" />
                            Edit
                        </Button>
                    </Link>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
};

export default NewEditProfile;


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
    buttonContainer: {
        alignItems: "center",
        marginTop: hp("5%"),
    },
    button: {
        width: wp("65%"),
        height: hp("7%"),
        justifyContent: "center",
        backgroundColor: "#0099CF",
    },
    buttonText: {
        fontSize: wp("5%"),
        alignItems: "center",
        fontFamily: "blod"
    },
})