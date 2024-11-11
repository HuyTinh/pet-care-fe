import React, { useEffect, useState } from "react"; // Import React and hooks
import {
  Image,
  Text,
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Modal
} from "react-native"; // Import components from react-native
import { Controller, SubmitHandler, useForm } from "react-hook-form"; // Import form handling from react-hook-form
import { Button, TextInput } from "react-native-paper"; // Import UI components from react-native-paper
import { Link, router } from "expo-router"; // Import router and Link component for navigation
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"; // For responsive screen design
import { useLoginRequestMutation } from "@/app/pharmacist.service"; // Import mutation hook for login
import { LoginRequest } from "@/types/login-request.type"; // Import LoginRequest type
import * as SecureStore from 'expo-secure-store'; // For storing secure data like tokens
import { useDispatch } from "react-redux"; // For dispatching actions to the Redux store
import { jwtDecode } from "jwt-decode"; // To decode JWT token
import { IJwtPayload } from "@/types/jwt-payload.type"; // Import JWT payload type
import { pharmacistProfileId } from "../pharmacist.slice"; // Redux action to update pharmacist profile ID

const Auth = () => {
  const [login] = useLoginRequestMutation(); // Mutation hook for logging in
  const { control, handleSubmit } = useForm<LoginRequest>(); // useForm hook for form handling
  const [modalVisible, setModalVisible] = useState(false); // State for controlling modal visibility
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message
  const dispatch = useDispatch(); // Dispatch function to update the Redux store

  // useEffect to retrieve and decode the token, and dispatch the user ID to Redux store
  useEffect(() => {
    SecureStore.getItemAsync('token')
      .then((retrievedToken) => {
        if (retrievedToken) {
          const decodedPayload = jwtDecode<IJwtPayload>(retrievedToken); // Decode the token
          dispatch(pharmacistProfileId(decodedPayload.user_id)); // Dispatch user_id to Redux store
        } else {
          console.log('No token found'); // Log if no token is found
        }
      })
      .catch((error) => {
        console.error('Error retrieving token:', error); // Log error if retrieval fails
      });
  }, []);

  // onSubmit handler for login
  const onSubmit: SubmitHandler<LoginRequest> = async (data: LoginRequest) => {
    try {
      await login(data).unwrap() // Call login mutation
        .then(() => {
          router.replace('/(tabs)/list'); // Redirect to list page on successful login
        })
    }
    catch (error) {
      setErrorMessage("Please check your account"); // Set error message if login fails
      setModalVisible(true); // Show error modal
    }
  };

  return (
    <>
      {/* Modal to display error messages */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible); // Close modal on request
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

      {/* Dismissing the keyboard when tapping outside the input fields */}
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

          {/* Form for login credentials */}
          <View style={styles.formContainer}>
            <View style={styles.circle2} />
            <View style={styles.inputContainer}>
              {/* Email input field */}
              <Controller
                control={control}
                rules={{ required: true }} // Required field
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
              {/* Password input field */}
              <Controller
                control={control}
                rules={{ required: true }} // Required field
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

            {/* Forgot password link */}
            <View style={styles.checkboxContainer}>
              <Link
                href="../(forgotpassword)/forgot-confirm-email"
                style={styles.forgotPassword}
              >
                Forgot Password!
              </Link>
            </View>
          </View>

          {/* Login button */}
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              style={styles.button}
              labelStyle={styles.buttonText}
              onPress={handleSubmit(onSubmit)} // Trigger form submit
            >
              Login
            </Button>
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
