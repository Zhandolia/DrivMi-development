import React, { useEffect, useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Alert,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import logo from "../../../assets/logo.png";
import Profile from "../../../assets/profile.svg";

const UserAccountInfo = ({ navigation }) => {
  const [tab, setTab] = useState("Account");

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.navbar}>
        <View style={styles.tabContainer}>
          <Text>Account</Text>
        </View>
        <View style={styles.tabContainer}>
          <Text>Vehicle</Text>
        </View>
        <View style={styles.tabContainer}>
          <Text>Preferences</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Account</Text>
        </View>
        <Profile width="100%" height="50%" />
        <View>
          <Text>Name</Text>
        </View>
        <View>
          <Text>Phone number</Text>
        </View>
        <View>
          <Text>Date of Birth</Text>
        </View>
        <View>
          <Text>Name</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    position: "relative",
    height: 75,
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: "50%",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tabContainer: {
    flex: 1,
    height: 40,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 34,
  },
  button: {
    height: 60,
    width: 150,
    backgroundColor: "#1944CC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 30,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default UserAccountInfo;
