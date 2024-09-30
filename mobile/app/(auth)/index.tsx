import {
  Image,
  Text,
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { Button } from "react-native-paper";
import { CheckBox } from "react-native-elements";
import React, { useState } from "react";
import { Link } from "expo-router";
import { useCameraPermissions } from "expo-camera";

const Auth = () => {
  const {
    control,
    // handleSubmit,
    // formState: { errors },
    // reset
  } = useForm<any>();
  const [isSelected, setSelection] = useState(false);
  const [permisson, requestPermissions] = useCameraPermissions();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="w-full h-full bg-[#0099CF]">
        <View className="mx-auto py-10 pt-20">
          <View className="w-36 h-36">
            <Image
              className="h-full w-full"
              source={require("../../assets/images/logo-nobackground.png")}
            />
          </View>
        </View>
        <View
          className="bg-white h-full rounded-tl-3xl pt-8"
          style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        >
          <Text className="text-center text-4xl">Login</Text>
          <View className="space-y-5 px-6 pb-10 pt-8">
            <View className="space-y-2">
              <Text className="px-2">Email address:</Text>
              <TextInput
                className="border bg-gray-100 text-gray-700 p-4 rounded-2xl"
                placeholderTextColor={"#cdcdcd"}
                placeholder="petcare@gmail.com"
                onChangeText={(text) => console.log(text)}
              />
            </View>
            <View className="space-y-2">
              <Text className="px-2">Password:</Text>
              <TextInput
                className="border bg-gray-100 text-gray-700 p-4 rounded-2xl"
                placeholderTextColor={"#cdcdcd"}
                placeholder="type here ..."
                secureTextEntry
                onChangeText={(text) => console.log(text)}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Auth;
