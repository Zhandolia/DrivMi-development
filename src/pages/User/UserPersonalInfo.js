import React, { useState } from "react";
import {
  ScrollView,
  View,
  Button,
  StyleSheet,
  TextInput,
  Text,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import logo from "../../../assets/logo.png";
import CheckBox from "@react-native-community/checkbox";
import { launchCamera } from "react-native-image-picker";
import { useRoute } from "@react-navigation/native";
import firebase from "firebase/app";
import "firebase/auth";

function UserPersonalInfo({ navigation }) {
  const [info, setInfo] = useState({
    fullName: "",
    dob: "",
    gender: "",
    phone: "",
    image: null,
    email: "",
    password: "",
    address: "",
    emergencyName: "",
    emergencyPhone: "",
  });
  const [isSelected, setSelection] = useState(false);

  const handleInfoChange = (newText, what) => {
    setInfo({ ...info, [what]: newText });
  };

  const selectImage = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setInfo({ ...info, image: source.uri });
      }
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>User account details</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => handleInfoChange(newText, "fullName")}
            value={info.fullName}
          />
          <Text style={styles.inputTitle}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => handleInfoChange(newText, "dob")}
            value={info.dob}
          />
          <Text style={styles.inputTitle}>Gender</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => handleInfoChange(newText, "gender")}
            value={info.gender}
          />
          <Text style={styles.inputTitle}>Phone number</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => handleInfoChange(newText, "phone")}
            value={info.phone}
          />
          <Button title="Select Image" onPress={selectImage} />
          {info.image && (
            <Image source={{ uri: info.image }} style={styles.image} />
          )}

          <Text style={styles.subtitle}>Log in</Text>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => handleInfoChange(newText, "email")}
            value={info.email}
          />
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => handleInfoChange(newText, "password")}
            value={info.password}
          />
          <Text style={styles.subtitle}>Preferences</Text>
          <Text style={styles.inputTitle}>Saved address</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => handleInfoChange(newText, "address")}
            value={info.address}
          />
          <Text style={styles.inputTitle}>Emergency contact name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) =>
              handleInfoChange(newText, "emergencyName")
            }
            value={info.emergencyName}
          />
          <Text style={styles.inputTitle}>Emergency contact phone number</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) =>
              handleInfoChange(newText, "emergencyPhone")
            }
            value={info.emergencyPhone}
          />

          <View style={styles.checkbox}>
            <Switch value={isSelected} onValueChange={setSelection} />
            <Text>I agree to drivmi's Terms of Service</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("UserCarInfo", { info: info })}
          >
            <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "White",
    flex: 1,
    alignItems: "center",
    padding: 20,
    marginBottom: 60,
  },
  logo: {
    height: "5%",
    marginTop: "5%",
    marginBottom: "10%",
  },
  title: {
    fontSize: 24,
    color: "#1944CC",
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    color: "#1944CC",
    margin: 30,
  },
  inputContainer: {
    alignItems: "center",
  },
  inputTitle: {
    alignSelf: "baseline",
  },
  input: {
    height: 60,
    width: 300,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#1944CC",
    padding: 10,
    borderRadius: 5,
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: "#1944CC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupText: {
    color: "#000000",
    marginVertical: 10,
  },
  checkbox: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
});

export default UserPersonalInfo;
