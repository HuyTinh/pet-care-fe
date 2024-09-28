import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    
     <Tabs
     screenOptions={{
       tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
       headerShown: false,
     }}>
     <Tabs.Screen
       name="index"
       options={{
         title: 'Home',
         tabBarIcon: ({ color, focused }) => (
           <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
         ),
       }}
     />
     <Tabs.Screen
       name="profile"
       options={{
         title: 'User',
         tabBarIcon: ({ color, focused }) => (
          <FontAwesome5 name={focused ? 'user-alt' : 'user'} size={24} color={color} />
         ),
       }}
     />
   </Tabs>
  );

}
