import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { Button, TextInput } from "react-native-paper";
import { Link, useNavigation } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const NewPassword = () => {
  const { control } = useForm<any>();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }
 
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={handleBack}>
            <View style={styles.backButton}>
              <Image
                source={require("@/assets/images/back.png")}
                style={styles.backIcon}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.logoContainer}>
            <Image
              source={require("@/assets/images/logo-removebg-preview.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Enter new Password</Text>
          <Text style={styles.subtitle}>Please enter your new password</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Password</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                className="rounded-xl"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                underlineColor="transparent"
                activeUnderlineColor="transparent"
                selectionColor="#0099CF"
                secureTextEntry
              />
            )}
            name="password"
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                className="rounded-xl"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                underlineColor="transparent"
                activeUnderlineColor="transparent"
                selectionColor="#0099CF"
                secureTextEntry
              />
            )}
            name="confirmPassword"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => console.log("Password confirmed")}
          >
            <Link href="./verify" style={styles.buttonText}>
              Confirm Password
            </Link>
          </Button>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: wp("100%"),
    marginTop: hp("15%"),
    paddingHorizontal: wp("5%"),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("2%"),
    height: hp("10%"),
  },
  backButton: {
    position: "absolute",
    left: 0,
    zIndex: 1,
    top: -90,
  },
  backIcon: {
    width: wp("7%"),
    height: wp("7%"),
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: wp("100%"),
    height: hp("20%"),
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: wp("5%"),
  },
  title: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    marginBottom: hp("2%"),
    fontFamily: "blod"
  },
  subtitle: {
    fontSize: wp("4%"),
    textAlign: "center",
    opacity: 0.5,
    fontFamily: "medium"
  },
  formContainer: {
    marginTop: hp("3%"),
  },
  label: {
    fontSize: wp("4%"),
    fontWeight: "600",
    color: "#4F4F4F",
    opacity: 0.5,
    marginBottom: hp("1%"),
    fontFamily: "blod"
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#606060",
    height: hp("7%"),
    fontSize: wp("4%"),
    fontFamily: "medium"
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: hp("5%"),
  },
  button: {
    backgroundColor: "#0099CF",
    width: wp("90%"),
    height: hp("7%"),
    justifyContent: "center",
    borderRadius: wp("3%"),
  },
  buttonText: {
    color: "white",
    fontSize: wp("4.5%"),
    fontWeight: "600",
    fontFamily: "blod"
  },
});

export default NewPassword;
