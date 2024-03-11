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
import MapView, { Marker, Circle } from "react-native-maps";
// import Geolocation from '@react-native-community/geolocation';

const DriverMenu = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: 42.3601,
    longitude: -71.0589,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const requestLocationPermission = async () => {
    if (Platform.OS === "ios") {
      Geolocation.requestAuthorization("whenInUse");
      locateCurrentPosition();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Access Required",
            message: "This app needs to access your location",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          locateCurrentPosition();
        } else {
          Alert.alert("Location Permission Denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion({
          ...region,
          latitude,
          longitude,
        });
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <TouchableOpacity style={styles.profileIcon}>
          <Profile width="100%" height="50%" />
        </TouchableOpacity>
      </View>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        followsUserLocation={true}
      />
      <View style={styles.pickupIndicator}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search for pickups</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
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
  map: {
    flex: 1,
    width: "100%",
  },
  pickupIndicator: {
    height: 200,
    alignItems: "center",
  },

  input: {
    padding: 16,
    marginTop: 10,
    height: 50, // Specify a height
    width: "90%", // Specify a width
    backgroundColor: "#F1F1F1", // Correct the color code
    borderRadius: "50%",
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
  profileIcon: {
    position: "absolute",
    top: "30%",
    right: -50,
    height: 70,
    width: 150,
  },
});

export default DriverMenu;
