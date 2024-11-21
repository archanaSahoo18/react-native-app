import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Link, Redirect } from 'expo-router';
import { Colors } from './../../constants/Colors.ts'; // Ensure Colors is correctly imported
import { useRouter } from 'expo-router';
import { Linking } from 'react-native';

export default function Index() {
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState(null); // State for generated OTP
  const [userOtp, setUserOtp] = useState(''); // State for user-entered OTP
  const [otpGenerated, setOtpGenerated] = useState(false); // State to track OTP generation
  const [isVerified, setIsVerified] = useState(false); // State to track verification
  const router = useRouter(); // Get the router instance

  
  const handleGenerateOTP = () => {
    if (!mobileNumber || mobileNumber.length !== 10) {
      Alert.alert('Invalid Input', 'Please enter a valid 10-digit mobile number.');
      return;
    }

    // Mock OTP generation logic (replace with actual API call if needed)
    const generatedOtp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    setOtp(generatedOtp);
    setOtpGenerated(true);
    Alert.alert('OTP Generated', `Your OTP is: ${generatedOtp}`);
    console.log('Generated OTP:', generatedOtp);

    // Additional logic for sending OTP (API call) can go here
  };

  const handleVerifyOTP = () => {
    if (parseInt(userOtp) === otp) {
      setIsVerified(true);
      Alert.alert('Success', 'OTP verified successfully!');
      router.push('/login/dashboard');
     } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  // Redirect after successful verification
  // if (isVerified) {
  //   return router.push('/login/dashboard');
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login Screen</Text>
      <Image
        source={require('./../../assets/images/EVSPEER.png')} // Ensure this path is correct
        style={styles.image}
      />
      <View style={styles.loginContainer}>
        <Text style={styles.welcomeText}>Welcome To EVSPEER</Text>
        <Text style={styles.labelText}>Enter Mobile Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.countryCodeInput}
            placeholder="+91"
            value={countryCode}
            onChangeText={setCountryCode}
            keyboardType="phone-pad"
            maxLength={4}
          />
          <TextInput
            style={styles.mobileInput}
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="number-pad"
            maxLength={10}
          />
        </View>
        {otpGenerated && (
          <>
            <Text style={styles.labelText}>Enter OTP</Text>
            <TextInput
              style={styles.otpInput}
              placeholder="Enter OTP"
              value={userOtp}
              onChangeText={setUserOtp}
              keyboardType="number-pad"
              maxLength={6}
            />
            <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOTP}>
              <Text style={styles.buttonText}>Verify OTP</Text>
            </TouchableOpacity>
          </>
        )}
        {!otpGenerated && (
          <TouchableOpacity style={styles.button} onPress={handleGenerateOTP}>
            <Text style={styles.buttonText}>Generate OTP</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  loginContainer: {
    padding: 25,
    marginTop: -20,
    backgroundColor: '#047366',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 18,
    color: Colors.GRAY,
    textAlign: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  countryCodeInput: {
    width: '20%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    textAlign: 'center',
    marginRight: 10,
    fontSize: 16,
  },
  mobileInput: {
    width: '70%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    paddingLeft: 10,
    fontSize: 16,
  },
  otpInput: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  verifyButton: {
    width: '80%',
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
