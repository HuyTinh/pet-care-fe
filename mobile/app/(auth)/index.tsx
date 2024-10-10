import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { Button, TextInput } from "react-native-paper";
import { CheckBox } from "react-native-elements";
import { Link } from "expo-router";
import { useCameraPermissions } from "expo-camera";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useGetAccountQuery } from "@/pharmacist/pharmacist.service";
import { Account } from "@/pharmacist/user/User";

const { width, height } = Dimensions.get("window");

const Auth = () => {
  const { data, isLoading, isFetching, isError } = useGetAccountQuery();
  const [isSelected, setSelection] = useState(false);
  const [permission, requestPermissions] = useCameraPermissions();
  const { control, reset } = useForm<Account>();

  useEffect(() => {
    reset((data as any)?.data);
  }, [data]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.logoContainer}>
            <View style={styles.circle1} />
            <Image
              style={styles.logo}
              source={require("@/assets/images/Logo2.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>Pet care</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.circle2} />
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  className="rounded-3xl"
                  label="Email"
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  left={<TextInput.Icon icon="email" />}
                  underlineColor="transparent"
                  activeUnderlineColor="#0099CF"
                />
              )}
              name="email"
            />
          </View>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  className="rounded-3xl"
                  label="Password"
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  left={<TextInput.Icon icon="key" />}
                  secureTextEntry
                  underlineColor="transparent"
                  activeUnderlineColor="#0099CF"
                />
              )}
              name="password"
            />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              title="Remember Me?"
              checked={isSelected}
              onPress={() => setSelection(!isSelected)}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              checkedColor="white"
            />
            <Link
              href="../(forgotpassword)/forgot-confirm-email"
              style={styles.forgotPassword}
            >
              Forgot Password!
            </Link>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Link href="./(tabs)/list">
            <Button
              mode="contained"
              style={styles.button}
              labelStyle={styles.buttonText}
            >
              Login
            </Button>
          </Link>
          {/* <Button onPress={requestPermissions}>Alow camera</Button> */}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0099CF",
    paddingHorizontal: wp("5%"),
  },
  topSection: {
    alignItems: "center",
    marginTop: hp("5%"),
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: wp("100%"),
    height: hp("20%"),
  },
  logo: {
    width: wp("50%"),
    height: hp("40%"),
  },
  title: {
    fontSize: wp("12%"),
    fontWeight: "bold",
    color: "white",
    marginTop: hp("2%"),
    zIndex: 1,
  },
  formContainer: {
    marginTop: hp("10%"),
    width: "100%",
  },
  inputContainer: {
    marginBottom: hp("5%"),
  },
  input: {
    backgroundColor: "white",
    height: hp("7%"),
    // borderRadius: 25,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
  },
  checkboxText: {
    color: "white",
    fontSize: wp("3.5%"),
  },
  forgotPassword: {
    color: "white",
    fontSize: wp("3.5%"),
    fontWeight: "500",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: hp("5%"),
  },
  button: {
    width: wp("60%"),
    height: hp("7%"),
    justifyContent: "center",
    backgroundColor: "#0F74C1",
  },
  buttonText: {
    fontSize: wp("5%"),
    fontWeight: "600",
    alignItems: "center",
  },
  circle1: {
    width: wp("150%"),
    height: wp("170%"),
    borderRadius: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    position: "absolute",
    top: -wp("95%"),
    left: -wp("25%"),
    borderWidth: 5,
    borderColor: "#0D74B1",
    shadowColor: "#0D74B1",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 0.25,
  },
  circle2: {
    width: wp("200%"),
    height: wp("150%"),
    borderRadius: wp("100%"),
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    position: "absolute",
    top: -wp("20%"),
    right: -wp("155%"),
    borderWidth: 5,
    borderColor: "#0D74B1",
    shadowColor: "#0D74B1",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 0.25,
  },
});

export default Auth;
