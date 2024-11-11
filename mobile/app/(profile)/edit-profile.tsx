import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from "react-native";
import { Avatar, Button, TextInput } from "react-native-paper";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigation } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useGetEmployeeByAccountIdQuery } from "@/app/pharmacist.service";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Account } from "@/types/account.type";

const EditProfile = () => {
  const [imageUrl, setImage] = useState([]); // State to store the selected image URL
  const { control, reset, handleSubmit } = useForm<any>(); // Initialize react-hook-form
  const navigation = useNavigation(); // Used for navigation
  const profileId = useSelector((state: RootState) => state.prescription.id); // Get profile ID from Redux store
  const { data, isFetching, isLoading } = useGetEmployeeByAccountIdQuery(profileId, {
    skip: !profileId // Skip the query if no profileId
  })
  const [imageUri, setImageUri] = useState((data as any)?.data?.image_url || null);
  const [value, setValue] = React.useState('first');
  const [modalVisible, setModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  function handleBack() {
    navigation.goBack();
  }

  // Effect hook to reset form data when profile data is fetched
  useEffect(() => {
    if (data) {
      reset((data as any)?.data); // Reset the form fields with the fetched data
    }
  }, [data]);

  // Function to handle form submission
  const onSubmit: SubmitHandler<Account> = async (data: Account) => {
    if (data) {
      //update
      setSuccessMessage("Update sucessfully!");
      setModalVisible(true);
    }

  }

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
              <Text className="mt-3 mb-3 font-bold text-3xl text-center">{successMessage}</Text>
              <Button style={styles.buttonModal} onPress={() => setModalVisible(false)} >
                <Text className="font-bold text-base text-white text-center">OK</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <ImageBackground
            source={require("@/assets/images/back_ground_medicine.jpg")}
            style={styles.header}
            imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
          >
          </ImageBackground>
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
              size={110}
              source={{ uri: (data as any)?.data?.image_url }}
              style={styles.avatar}
            />
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
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <Controller
                control={control}
                rules={{ required: true }} // Validation for required field
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
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone number</Text>
              <Controller
                control={control}
                rules={{ required: true }} // Validation for required field
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
                name="phone_number"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Gender</Text>
              <Controller
                control={control}
                name="gender"
                rules={{ required: 'Please select a gender' }}
                render={({ field: { onChange, value } }) => (
                  <View className="flex flex-row justify-around">
                    {["MALE", "FEMALE",].map((option) => (
                      <TouchableOpacity
                        key={option}
                        onPress={() => onChange(option)}
                        className="flex flex-row items-center"
                      >
                        <View
                          style={{
                            height: 20,
                            width: 20,
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: '#0099CF',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 5,
                          }}
                        >
                          {value === option && (
                            <View
                              style={{
                                height: 10,
                                width: 10,
                                borderRadius: 5,
                                backgroundColor: '#0099CF',
                              }}
                            />
                          )}
                        </View>
                        <Text className="text-xl" style={{ fontFamily: "medium" }}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.updateButton}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.buttonText} >Update</Text>
            </Button>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: wp("100%"),
  },
  header: {
    height: hp("25%"),
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
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
    marginTop: wp("-13%"),
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
    marginTop: wp("1%"),
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
  buttonModal: {
    backgroundColor: "#0099CF",
    marginTop: 20,
    width: wp("50%")
  }
});

export default EditProfile;
