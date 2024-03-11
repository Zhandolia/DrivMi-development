import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import logo from "../../assets/logo.png";

function MenuPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <TouchableOpacity
        style={styles.buttonRider}
        onPress={() => navigation.navigate("UserPersonalInfo")}
      >
        <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>
          Request ride
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonDriver}
        onPress={() => navigation.navigate("DriverPersonalInfo")}
      >
        <Text style={[styles.buttonText, { color: "#1944CC" }]}>
          Be a driver
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "White",
  },
  logo: {
    height: "5%",
    marginTop: "5%",
    marginBottom: "45%",
  },
  buttonRider: {
    backgroundColor: "#1944CC",
    padding: 20,
    borderRadius: 100,
    marginBottom: 10,
    width: "70%",
    alignItems: "center",
  },
  buttonDriver: {
    backgroundColor: "#F1F1F1",
    padding: 20,
    borderRadius: 100,
    marginBottom: 10,
    width: "70%",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default MenuPage;
