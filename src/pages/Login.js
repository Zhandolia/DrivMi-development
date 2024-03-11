import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import logo from "../../assets/logo.png";
import { auth } from "../../config/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ navigation }) {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleemailChange = (newText) => {
    setLoginInfo({ ...loginInfo, email: newText });
  };

  const handlePasswordChange = (newText) => {
    setLoginInfo({ ...loginInfo, password: newText });
  };

  const handleSubmit = async () => {
    if (loginInfo.email && loginInfo.password) {
      try {
        console.log(loginInfo);
        await signInWithEmailAndPassword(
          auth,
          loginInfo.email,
          loginInfo.password
        );
        console.log("logged in");
      } catch (err) {
        console.log("got error : ", err.message);
      }
    }
    navigation.navigate("UserMenu");
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleemailChange}
          value={loginInfo.email}
        />
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={handlePasswordChange}
          value={loginInfo.password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>
          Don't have an account? Sign up{" "}
          <Text
            onPress={() => navigation.navigate("MenuPage")}
            style={{ color: "#1944CC" }}
          >
            here.
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "White",
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  logo: {
    height: "5%",
    marginTop: "5%",
    marginBottom: "45%",
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
});

export default Login;
