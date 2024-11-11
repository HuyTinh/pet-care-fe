import React from 'react';
import { StyleSheet, Text, Image, View, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextInput } from 'react-native-paper';
import { Link, useNavigation } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Verify = () => {
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
            <Image source={require('@/assets/images/back.png')} style={styles.backIcon} />
          </Button>
          <View style={styles.logoContainer}>
            <Image source={require('@/assets/images/logo-removebg-preview.png')} style={styles.logo} resizeMode="contain" />
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Email Verification</Text>
          <Text style={styles.subtitle}>Please enter the 5 digit code sent to your email</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Code</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                className='rounded-xl'
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                underlineColor="transparent"
                activeUnderlineColor="transparent"
                selectionColor="#0099CF"
              />
            )}
            name="verify"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.verifyButton}
            onPress={() => console.log("")}
          >
            <Link href="./new-password" style={styles.buttonText}>
              Verify
            </Link>
          </Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.resendButton}
            onPress={() => console.log("")}
          >
            <Text style={styles.resendButtonText}>Resend</Text>
          </Button>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: wp('100%'),
    paddingHorizontal: wp('5%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('5%'),
  },
  backButton: {
    position: "absolute",
    left: -20,
    top: 10,
    zIndex: 1,
  },
  backIcon: {
    width: wp('7%'),
    height: wp('7%'),
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp('6%'),
  },
  logo: {
    width: wp('100%'),
    height: hp('20%'),
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
    fontFamily: "blod"
  },
  subtitle: {
    fontSize: wp('4%'),
    textAlign: 'center',
    opacity: 0.5,
    fontFamily: "medium"
  },
  formContainer: {
    marginTop: hp('5%'),
  },
  label: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#4F4F4F',
    opacity: 0.5,
    marginBottom: hp('1%'),
    fontFamily: "blod"
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#606060',
    height: hp('7%'),
    fontSize: wp('4%'),
    fontFamily: "medium"
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  verifyButton: {
    backgroundColor: '#0099CF',
    width: wp('90%'),
    height: hp('7%'),
    justifyContent: 'center',
    borderRadius: wp('2%'),
  },
  resendButton: {
    width: wp('90%'),
    height: hp('7%'),
    justifyContent: 'center',
    borderRadius: wp('2%'),
    borderWidth: 1,
    borderColor: '#0099CF',
  },
  buttonText: {
    color: 'white',
    fontSize: wp('4.5%'),
    fontWeight: '600',
    fontFamily: "blod"
  },
  resendButtonText: {
    color: 'black',
    fontSize: wp('4.5%'),
    fontWeight: '600',
  },
});

export default Verify;