// // // // import React, { useEffect, useState } from "react";
// // // // import {
// // // //   View,
// // // //   Button,
// // // //   StyleSheet,
// // // //   Image,
// // // //   PermissionsAndroid,
// // // //   Platform,
// // // //   Alert,
// // // //   TextInput,
// // // //   Text,
// // // //   TouchableOpacity,
// // // // } from "react-native";
// // // // import logo from "../../../assets/logo.png";
// // // // import Profile from "../../../assets/profile.svg";
// // // // import MapView, { Marker, Circle } from "react-native-maps";
// // // // // import Geolocation from '@react-native-community/geolocation';

// // // // const UserMenu = ({ navigation }) => {
// // // //   const [region, setRegion] = useState({
// // // //     latitude: 42.3601,
// // // //     longitude: -71.0589,
// // // //     latitudeDelta: 0.0922,
// // // //     longitudeDelta: 0.0421,
// // // //   });

// // // //   const requestLocationPermission = async () => {
// // // //     if (Platform.OS === "ios") {
// // // //       Geolocation.requestAuthorization("whenInUse");
// // // //       locateCurrentPosition();
// // // //     } else {
// // // //       try {
// // // //         const granted = await PermissionsAndroid.request(
// // // //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
// // // //           {
// // // //             title: "Location Access Required",
// // // //             message: "This app needs to access your location",
// // // //           }
// // // //         );
// // // //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
// // // //           locateCurrentPosition();
// // // //         } else {
// // // //           Alert.alert("Location Permission Denied");
// // // //         }
// // // //       } catch (err) {
// // // //         console.warn(err);
// // // //       }
// // // //     }
// // // //   };

// // // //   const locateCurrentPosition = () => {
// // // //     Geolocation.getCurrentPosition(
// // // //       (position) => {
// // // //         const { latitude, longitude } = position.coords;
// // // //         setRegion({
// // // //           ...region,
// // // //           latitude,
// // // //           longitude,
// // // //         });
// // // //       },
// // // //       (error) => Alert.alert(error.message),
// // // //       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
// // // //     );
// // // //   };

// // // //   useEffect(() => {
// // // //     requestLocationPermission();
// // // //   }, []);

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <View style={styles.logoContainer}>
// // // //         <Image source={logo} style={styles.logo} resizeMode="contain" />
// // // //         <TouchableOpacity
// // // //           style={styles.profileIcon}
// // // //           onPress={() => navigation.navigate("UserAccountInfo")}
// // // //         >
// // // //           <Profile width="100%" height="50%" />
// // // //         </TouchableOpacity>
// // // //       </View>
// // // //       <MapView
// // // //         style={styles.map}
// // // //         region={region}
// // // //         showsUserLocation={true}
// // // //         followsUserLocation={true}
// // // //       />
// // // //       <View style={styles.pickupIndicator}>
// // // //         <TextInput
// // // //           style={styles.input}
// // // //           placeholder="Where To?"
// // // //           placeholderTextColor="#1944CC"
// // // //         />
// // // //         <TouchableOpacity style={styles.button}>
// // // //           <Text style={styles.buttonText}>Home</Text>
// // // //         </TouchableOpacity>
// // // //       </View>
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     justifyContent: "flex-end",
// // // //   },
// // // //   logoContainer: {
// // // //     position: "relative",
// // // //     height: 75,
// // // //     width: "100%",

// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // //   logo: {
// // // //     height: "50%",
// // // //   },
// // // //   map: {
// // // //     flex: 1,
// // // //     width: "100%",
// // // //   },
// // // //   pickupIndicator: {
// // // //     height: 200,
// // // //     alignItems: "center",
// // // //   },

// // // //   input: {
// // // //     padding: 16,
// // // //     marginTop: 10,
// // // //     height: 50, // Specify a height
// // // //     width: "90%", // Specify a width
// // // //     backgroundColor: "#F1F1F1", // Correct the color code
// // // //     borderRadius: 50,
// // // //   },
// // // //   button: {
// // // //     height: 60,
// // // //     width: 150,
// // // //     backgroundColor: "#1944CC",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     borderRadius: 100,
// // // //     marginVertical: 30,
// // // //   },
// // // //   buttonText: {
// // // //     color: "#ffffff",
// // // //     fontSize: 24,
// // // //     fontWeight: "bold",
// // // //   },
// // // //   profileIcon: {
// // // //     position: "absolute",
// // // //     top: "30%",
// // // //     right: -50,
// // // //     height: 70,
// // // //     width: 150,
// // // //   },
// // // // });

// // // // export default UserMenu;

// // // import React, { useEffect, useState } from 'react';
// // // import { StyleSheet, View, PermissionsAndroid, Platform } from 'react-native';
// // // import MapView, { Marker } from 'react-native-maps';
// // // import Geolocation from '@react-native-community/geolocation';

// // // const MapScreen = () => {
// // //   const [currentPosition, setCurrentPosition] = useState({
// // //     latitude: 0,
// // //     longitude: 0,
// // //     latitudeDelta: 0.0922,
// // //     longitudeDelta: 0.0421,
// // //   });

// // //   useEffect(() => {
// // //     const requestLocationPermission = async () => {
// // //       if (Platform.OS === 'ios') {
// // //         Geolocation.requestAuthorization();
// // //         locateCurrentPosition();
// // //       } else {
// // //         const granted = await PermissionsAndroid.request(
// // //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
// // //           {
// // //             title: 'Location Access Required',
// // //             message: 'This app needs to access your location',
// // //           },
// // //         );

// // //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
// // //           locateCurrentPosition();
// // //         } else {
// // //           // Handle permission denied error
// // //         }
// // //       }
// // //     };

// // //     const locateCurrentPosition = () => {
// // //       Geolocation.getCurrentPosition(
// // //         position => {
// // //           const { latitude, longitude } = position.coords;
// // //           setCurrentPosition({
// // //             ...currentPosition,
// // //             latitude,
// // //             longitude,
// // //           });
// // //         },
// // //         error => console.warn(error.message),
// // //         { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
// // //       );
// // //     };

// // //     requestLocationPermission();
// // //   }, []);

// // //   return (
// // //     <View style={styles.container}>
// // //       <MapView
// // //         style={styles.map}
// // //         region={currentPosition}
// // //         showsUserLocation={true}
// // //         followUserLocation={true}
// // //       >
// // //         <Marker coordinate={currentPosition} />
// // //       </MapView>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: 'flex-end',
// // //     alignItems: 'center',
// // //   },
// // //   map: {
// // //     ...StyleSheet.absoluteFillObject,
// // //   },
// // // });

// // // export default MapScreen;

// // import React from 'react';
// // import {View, StyleSheet, Dimensions} from 'react-native';
// // import MapView from 'react-native-maps';

// // const App = () => {
// //   return (
// //     <View style={styles.container}>
// //       <MapView
// //         style={styles.map}
// //         initialRegion={{
// //           latitude: 37.78825,
// //           longitude: -122.4324,
// //           latitudeDelta: 0.0922,
// //           longitudeDelta: 0.0421,
// //         }}
// //         showsUserLocation={true}
// //         followUserLocation={true}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     ...StyleSheet.absoluteFillObject,
// //     justifyContent: 'flex-end',
// //     alignItems: 'center',
// //   },
// //   map: {
// //     ...StyleSheet.absoluteFillObject,
// //   },
// // });

// // export default App;

// import React from 'react';
// import {View, StyleSheet, Dimensions, Platform} from 'react-native';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <MapView
//         provider={PROVIDER_GOOGLE} 
//         style={styles.map}
//         initialRegion={{
//           latitude: 42.3501729,
//           longitude: -71.1032859,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         showsUserLocation={true}
//         followUserLocation={true}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// export default App;

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Platform, PermissionsAndroid } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const UserMenu = () => {
  const [position, setPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This app needs to access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            watchLocation();
          } else {
            console.error('Location permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      } else {
        watchLocation();
      }
    };

    requestLocationPermission();
  }, []);

  const watchLocation = () => {
    Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setPosition({
          ...position,
          latitude,
          longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        });
      },
      error => console.error(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // Add this line to use Google Maps
        style={styles.map}
        region={position}
        showsUserLocation={true}
        followUserLocation={true}
      >
        <Marker coordinate={position} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default UserMenu;
