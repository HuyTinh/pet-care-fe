import React from "react";
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

const ConfirmEmail = () => {
  const { control } = useForm<any>();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Button onPress={handleBack} style={styles.backButton}>
            <Image
              source={require("@/assets/images/back.png")}
              style={styles.backIcon}
            />
          </Button>
          <View style={styles.logoContainer}>
            <Image
              source={require("@/assets/images/logo-removebg-preview.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Change your Password</Text>
          <Text style={styles.subtitle}>
            You need to confirm your email to receive the code to change your
            password.
          </Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
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
              />
            )}
            name="email"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={() => console.log("hihi")}>
            <Link href="./verify" style={styles.buttonText}>
              Update
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
    paddingHorizontal: wp("5%"),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("5%"),
  },
  backButton: {
    position: "absolute",
    left: -20,
    top: 10,
    zIndex: 1,
  },
  backIcon: {
    width: wp("7%"),
    height: wp("7%"),
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: hp("6%"),
  },
  logo: {
    width: wp("100%"),
    height: hp("20%"),
  },
  contentContainer: {
    alignItems: "center",
    marginTop: hp("5%"),
    paddingHorizontal: wp("5%"),
  },
  title: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    marginBottom: hp("2%"),
  },
  subtitle: {
    fontSize: wp("4%"),
    textAlign: "center",
    opacity: 0.5,
  },
  formContainer: {
    marginTop: hp("5%"),
  },
  label: {
    fontSize: wp("4%"),
    fontWeight: "600",
    color: "#4F4F4F",
    opacity: 0.5,
    marginBottom: hp("1%"),
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#606060",
    height: hp("7%"),
    fontSize: wp("4%"),
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
  },
});

export default ConfirmEmail;
