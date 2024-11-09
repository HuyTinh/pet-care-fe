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
  Modal
} from "react-native";
import { Controller, set, SubmitHandler, useForm } from "react-hook-form";
import { Button, TextInput } from "react-native-paper";
import { Link, router } from "expo-router";
import { useCameraPermissions } from "expo-camera";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useGetAccountMutation } from "@/app/pharmacist.service";
import { LoginRequest } from "@/types/login-request.type";
import { useFonts } from "expo-font";
import * as SecureStore from 'expo-secure-store';
import { isRemember, startEditPrescription } from "@/app/prescription.slice";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode, JwtPayload } from "jwt-decode";
const Auth = () => {
  interface JwtPayload {
    userId: string;
    sub: string;
    email: string;
    exp: number;
  }
  const [login, { isLoading }] = useGetAccountMutation();
  const [permission, requestPermissions] = useCameraPermissions();
  const { control, reset, handleSubmit } = useForm<LoginRequest>();
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const mystate = useSelector((state) => (state as any)?.change);
  const [idToken, setIdToken] = useState<string | null>(null);
  const dispatch = useDispatch();

  // 
  useEffect(() => {
    SecureStore.getItemAsync('token')
      .then((retrievedToken) => {
        if (retrievedToken) {
          const decodedPayload = jwtDecode<JwtPayload>(retrievedToken);
          dispatch(startEditPrescription(decodedPayload.userId))
        } else {
          console.log('No token found');
        }
      })
      .catch((error) => {
        console.error('Error retrieving token:', error);
      });
  }, []);

  const onSubmit: SubmitHandler<LoginRequest> = async (data: LoginRequest) => {
    try {
      await login(data).unwrap()
        .then(() => {
          router.replace('/(tabs)/list');
        })
    }
    catch (error) {
      setErrorMessage("Please check your account");
      setModalVisible(true);
    }
  }
  const [loaded] = useFonts({
    blod: require("../../assets/fonts/Kodchasan-SemiBold.ttf"),
    medium: require('../../assets/fonts/Kodchasan-ExtraLightItalic.ttf')
  });

  const { width, height } = Dimensions.get("window");
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="flex-1 justify-center items-center">
          <View style={{ width: 380, height: 320, padding: 50, backgroundColor: 'white', borderRadius: 10 }} className="flex justify-center items-center">
            <View className="justify-center items-center">
              <Image className="w-36 h-32" source={require("@/assets/images/error.gif")} />
              <Text className="mt-3 mb-3 font-bold text-3xl text-center">{errorMessage}</Text>
              <Button style={styles.buttonModal} onPress={() => setModalVisible(false)} >
                <Text className="font-bold text-base text-white text-center">OK</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
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
                    className="!rounded-full"
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
              <Link
                href="../(forgotpassword)/forgot-confirm-email"
                style={styles.forgotPassword}
              >
                Forgot Password!
              </Link>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              style={styles.button}
              labelStyle={styles.buttonText}
              onPress={handleSubmit(onSubmit)}
            >
              Login
            </Button>
            {/* <Button onPress={requestPermissions}>Alow camera</Button> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
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
    fontFamily: "blod"
  },
  formContainer: {
    marginTop: hp("8%"),
    width: "100%",
  },
  inputContainer: {
    marginBottom: hp("3%"),
  },
  input: {
    backgroundColor: "white",
    height: hp("7%"),
    borderTopEndRadius: 25,
    borderRadius: 25,
    borderTopLeftRadius: 25,
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
    fontFamily: "medium",
  },
  forgotPassword: {
    color: "white",
    fontSize: wp("3.8%"),
    fontWeight: "500",
    fontFamily: "medium",
    marginLeft: wp("50%")

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
    fontFamily: "blod"
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
  buttonModal: {
    backgroundColor: "#0099CF",
    marginTop: 20,
    width: wp("50%")
  }
});

export default Auth;
