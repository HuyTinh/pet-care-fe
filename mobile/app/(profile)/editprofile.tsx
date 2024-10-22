import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Avatar, Button, TextInput } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useGetAllAccountQuery } from "@/app/pharmacist.service";

const EditProfile = () => {
  const { data, isLoading, isFetching, isError } = useGetAllAccountQuery();
  const [imageUrl, setImage] = useState([]);
  const { control, reset } = useForm<any>();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    reset((data as any)?.data);
  }, [data]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={handleBack}>
            <View style={styles.backButton}>
              <Image
                source={require("@/assets/images/back2.png")}
                style={styles.backIcon}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.avatarContainer}>
            <Avatar.Image
              size={wp("25%")}
              source={{ uri: (data as any)?.data.image }}
              style={styles.avatar}
            />
            <TouchableWithoutFeedback
              onPress={() => console.log("Change avatar")}
            >
              <View style={styles.addButton}>
                <Image
                  source={require("@/assets/images/plus.png")}
                  style={styles.addIcon}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.nameContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Last name</Text>
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
                name="last_name"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>First name</Text>
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
                name="first_name"
              />
            </View>
          </View>

          {["email", "contact", "birthday"].map((field) => (
            <View key={field} style={styles.inputContainer}>
              <Text style={styles.label}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </Text>
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
                name={field}
              />
            </View>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.updateButton}
            onPress={() => console.log("Update profile")}
          >
            <Text style={styles.buttonText}>Update</Text>
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
  },
  header: {
    backgroundColor: "#0099CF",
    height: hp("30%"),
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: hp("7%"),
    left: wp("5%"),
    zIndex: 1,
  },
  backIcon: {
    width: wp("5%"),
    height: wp("5%"),
    tintColor: "white",
  },
  avatarContainer: {
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "transparent",
  },
  addButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: wp("5%"),
    padding: wp("2%"),
  },
  addIcon: {
    width: wp("5%"),
    height: wp("5%"),
  },
  formContainer: {
    padding: wp("5%"),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    marginBottom: hp("2%"),
    flex: 1,
    marginHorizontal: wp("1%"),
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
    height: hp("6%"),
    fontSize: wp("4%"),
    fontFamily: "medium"
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: hp("5%"),
  },
  updateButton: {
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

export default EditProfile;
