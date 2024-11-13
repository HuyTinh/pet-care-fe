import { StyleSheet, View, Image, Text } from 'react-native';
import React, { useCallback } from 'react';
import { Avatar, Card } from 'react-native-paper';
import { Link, router } from 'expo-router';
import { useGetEmployeeByAccountIdQuery } from '@/app/pharmacist.service';
import * as SecureStore from 'expo-secure-store';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

// The main functional component for exploring user settings/profile
const Explore = () => {
  // Function to delete the token and redirect to the auth screen
  const handleDeleteToken = useCallback(async () => {
    await SecureStore.deleteItemAsync("token"); // Deletes the token from secure storage
    router.replace("/(auth)"); // Redirect to the authentication screen
  }, [router]);

  // Accessing profile ID from the Redux store
  const profileId = useSelector((state: RootState) => state.pharmacist.id);

  // Fetch profile data using the profile ID from the API
  const { data: profileData, isLoading: profileLoading } = useGetEmployeeByAccountIdQuery(profileId, {
    skip: !profileId, // Skip the query if profileId is not available
  });

  return (
    <View className='h-full w-full'>
      {/* Profile Header Section */}
      <View style={styles.square}>
        <View>
          <View className='items-center mt-28 static'>
            {/* Displaying the user's avatar */}
            <Avatar.Image size={100} source={{ uri: (profileData as any)?.data.image_url }} />
            <View>
              {/* Displaying the user's name */}
              <Text className='text-2xl font-bold mt-2 text-white' style={{ fontFamily: "blod" }}>
                {(profileData as any)?.data.first_name} {(profileData as any)?.data.last_name}
              </Text>
              {/* Displaying the user's ID */}
              <Text className='text-lg font-medium opacity-70 text-white ml-[15px]' style={{ fontFamily: "blod" }}>
                ID:<Text style={{ fontFamily: "medium" }}> #PC{(profileData as any)?.data.id}</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Settings and Profile Options Section */}
      <View className='p-7'>
        {/* Profile Card */}
        <Card style={styles.card}>
          <Link href={"../(profile)/show-profile"}>
            <Card.Content className='h-24 flex flex-row items-center'>
              <Image source={require('@/assets/images/Edit.png')} />
              <Text className='ml-5 text-[17px] text-white font-medium' style={{ fontFamily: "blod" }}>
                My profile
              </Text>
              <Image className='ml-52' source={require('@/assets/images/navigate_next.png')} />
            </Card.Content>
          </Link>
        </Card>

        {/* Change Password Card */}
        <Card style={styles.card}>
          <Link href={"../(changepassword)/new-password"}>
            <Card.Content className='h-24 flex flex-row items-center'>
              <Image source={require('@/assets/images/Lock.png')} />
              <Text className='ml-5 text-[17px] text-white font-medium' style={{ fontFamily: "blod" }}>
                Change Password
              </Text>
              <Image className='ml-32' source={require('@/assets/images/navigate_next.png')} />
            </Card.Content>
          </Link>
        </Card>

        {/* Sign Out Card */}
        <Card style={styles.card} onPress={handleDeleteToken}>
          <Card.Content className='h-24 flex flex-row items-center'>
            <Image source={require('@/assets/images/Log out.png')} />
            <Text className='ml-5 font-semibold text-[15px] text-white' style={{ fontFamily: "blod" }}>
              Sign out
            </Text>
            <Image className='ml-56' source={require('@/assets/images/navigate_next.png')} />
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default Explore;

// Styles for the layout
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
    backgroundColor: '#0099CF',
    marginTop: 28,
  },
});
