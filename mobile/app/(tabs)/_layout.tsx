import { Stack, Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(scanner)"
        options={{
          title: "QR",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "qrcode-scan" : "scan-helper"}
              size={24}
              color={"#0099CF"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "List",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "list-circle-sharp" : "list"} size={24} color={"#0099CF"} />   
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "User",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name={focused ? "user-alt" : "user"}
              size={24}
              color={"#0099CF"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
