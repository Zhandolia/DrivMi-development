// Driver Account Details
import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Alert, Platform, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
// import CheckBox from '@react-native-community/checkbox';

const FloatingLabelInput = forwardRef(({ label, value, onChangeText, ...rest }, ref) => {
  return (
    <View style={styles.floatingLabelInputContainer}>
      <Text style={styles.floatingLabel}>{label}</Text>
      <TextInput
        ref={ref}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, styles.floatingLabelInput]}
        {...rest}
      />
    </View>
  );
});

const DriverPersonalInfo = ({ navigation }) => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const nameInputRef = useRef(null);

  const handleSubmit = () => {
    if (agreeToTerms) {
      const driverInfo = {
        fullName: name,
        dob: dateOfBirth,
        gender: gender,
        phone: phoneNumber,
        email: email,
        password: password
      }
      navigation.navigate('DriverLicenseInfo', { info: driverInfo });
    } else {
      Alert.alert('Terms of Service', 'You must agree to the terms of service before proceeding.');
    }
  };

  const genderPickerPlaceholder = {
    label: 'Select Gender',
    value: null,
    color: '#9EA0A4',
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    hideDatePicker();
    // Check if the year is not before 1950
    if (currentDate.getFullYear() >= 1950) {
      setDateOfBirth(currentDate);
    } else {
      Alert.alert('Date of Birth', 'Year must not be before 1950.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Driver Account Details</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TouchableOpacity onPress={showDatePicker} style={styles.datePickerContainer}>
        <Text style={styles.datePickerTitle}>Date of Birth</Text>
        <Text style={styles.datePickerText}>{dateOfBirth.toDateString()}</Text>
      </TouchableOpacity>

      {isDatePickerVisible && (
        <DateTimePicker
          value={dateOfBirth}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
          maximumDate={new Date()}
        />
      )}
      <RNPickerSelect
        onValueChange={(value) => setGender(value)}
        items={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
        style={pickerSelectStyles}
        placeholder={genderPickerPlaceholder}
        useNativeAndroidPickerStyle={false}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text.toLowerCase())} // Convert email to lowercase
        keyboardType="email-address"
        style={styles.input}
        onEndEditing={() => {
          if (!validateEmail(email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
          }
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // hide password
        style={styles.input}
      />
      <View style={styles.termsContainer}>
      <Text style={styles.label}>I agree to DrivMi's Terms of Service</Text>
        <Switch
          trackColor={{ false: "#000", true: "#1944CC" }}
          thumbColor={agreeToTerms ? "#fff" : "#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setAgreeToTerms}
          value={agreeToTerms}
        />
      </View>
      <TouchableOpacity
        onPress={handleSubmit}
        style={[styles.button, { backgroundColor: agreeToTerms ? '#1944CC' : '#aaa' }]}
        disabled={!agreeToTerms}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  viewContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#1944CC',
    padding: 10,
    borderRadius: 4,
    color: '#1944CC',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#1944CC',
    padding: 10,
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#1944CC',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1944CC',
  },
  button: {
    backgroundColor: '#1944CC',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  termsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns children at both ends of the container
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    flex: 1,
    margin: 8,
  },
  floatingLabelInputContainer: {
    position: 'relative',
    paddingTop: 18,
    marginVertical: 8,
  },
  floatingLabel: {
    position: 'absolute',
    left: 10,
    top: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 4,
    color: '#1944CC',
  },
  floatingLabelInput: {
    paddingTop: 20,
  },
  datePicker: {
    marginBottom: 10,
  },
  datePickerContainer: {
    borderWidth: 1,
    borderColor: '#1944CC',
    borderRadius: 5,
    marginBottom: 0,
    padding: 10,
    justifyContent: 'center',
  },
  datePickerTitle: {
    color: '#1944CC',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  datePickerText: {
    color: 'black',
    fontSize: 16,
  },
});

export default DriverPersonalInfo;
