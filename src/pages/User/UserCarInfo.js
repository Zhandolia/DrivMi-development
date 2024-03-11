import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { useRoute } from "@react-navigation/native";
import { auth } from "../../../config/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase.js";

const UserCarInfo = ({ navigation }) => {
  const route = useRoute();
  const info = route.params?.info;
  const [carInfo, setCarInfo] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    licensePlate: "",
    state: "",
  });

  const handleCarInfoChange = (newText, what) => {
    setCarInfo({ ...carInfo, [what]: newText });
  };

  const handleSubmit = async () => {
    if (info.email && info.password) {
      try {
        console.log(info);
        //console.log(info)
        await createUserWithEmailAndPassword(auth, info.email, info.password);
        console.log("logged in");
      } catch (err) {
        console.log("got error : ", err.message);
      }
    }
    let user = auth.currentUser;
    info.user = user.uid;
    info.carInfo = carInfo;
    try {
      const docRef = await addDoc(collection(db, "userInfo"), {
        userInfo: info,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigation.navigate("UserMenu");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Vehicle Information</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Make</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => handleCarInfoChange(newText, "make")}
            value={carInfo.make}
          />
          <Text style={styles.inputTitle}>Model</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => handleCarInfoChange(newText, "model")}
            value={carInfo.model}
          />
          <Text style={styles.inputTitle}>Year</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => handleCarInfoChange(newText, "year")}
            value={carInfo.year}
          />
          <Text style={styles.inputTitle}>Color</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => handleCarInfoChange(newText, "color")}
            value={carInfo.color}
          />
          <Text style={styles.subtitle}>Registration</Text>
          <Text style={styles.inputTitle}>License Plate</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) =>
              handleCarInfoChange(newText, "licensePlate")
            }
            value={carInfo.licensePlate}
          />
          <Text style={styles.inputTitle}>State</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => handleCarInfoChange(newText, "state")}
            value={carInfo.state}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

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
    width: 200,
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
});

export default UserCarInfo;
