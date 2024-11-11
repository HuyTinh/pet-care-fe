import { Tabs } from "expo-router"; // Importing the Tabs component from expo-router to manage tab navigation
import React from "react"; // Importing React library
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"; // Importing FontAwesome5 icons for user-related tab
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"; // Importing Ionicons and MaterialCommunityIcons for other tabs

// This is the main component for setting up tab navigation layout in the app
export default function TabLayout() {
  return (
    // Configuring Tabs with screen options
    <Tabs
      screenOptions={{
        headerShown: false, // Disabling the header on top of the screen
      }}
    >
      {/* Screen for QR scanning */}
      <Tabs.Screen
        name="(scanner)" // Name of the tab
        options={{
          title: "QR", // Title of the tab
          tabBarIcon: ({ color, focused }) => (
            // Using MaterialCommunityIcons for the QR scan tab
            <MaterialCommunityIcons
              name={focused ? "qrcode-scan" : "scan-helper"} // Change icon depending on whether the tab is focused
              size={24} // Size of the icon
              color={"#0099CF"} // Icon color
            />
          ),
        }}
      />
      {/* Screen for the list of items */}
      <Tabs.Screen
        name="list" // Name of the tab
        options={{
          title: "List", // Title of the tab
          tabBarIcon: ({ color, focused }) => (
            // Using Ionicons for the List tab
            <Ionicons
              name={focused ? "list-circle-sharp" : "list"} // Change icon depending on whether the tab is focused
              size={24} // Size of the icon
              color={"#0099CF"} // Icon color
            />
          ),
        }}
      />
      {/* Screen for the user profile */}
      <Tabs.Screen
        name="profile" // Name of the tab
        options={{
          title: "User", // Title of the tab
          tabBarIcon: ({ color, focused }) => (
            // Using FontAwesome5 for the User tab
            <FontAwesome5
              name={focused ? "user-alt" : "user"} // Change icon depending on whether the tab is focused
              size={24} // Size of the icon
              color={"#0099CF"} // Icon color
            />
          ),
        }}
      />
    </Tabs>
  );
}
