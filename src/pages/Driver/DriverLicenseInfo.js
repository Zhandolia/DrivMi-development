import React, { useState } from 'react';
import { View, Button, StyleSheet, Image, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

const DriverLicenseInfo = ({ navigation }) => {
  const [carPhoto, setCarPhoto] = useState(null);

  const route = useRoute()
  const info = route.params?.info
  
  const handleSubmit = async () => {
    if(info.email && info.password){
      try {
        console.log(info)
        //console.log(info)
        await createUserWithEmailAndPassword(auth, info.email, info.password)
        console.log("logged in")

      } catch (err) {
        console.log("got error : ", err.message)
      }
    } 
    let user = auth.currentUser;
    info.user = user.uid;
    const licenseInfo = {
      licenseNumber: licenseNumber,
      licensePhoto: licensePhoto,
      isProfessionalDriver: isProfessionalDriver
    }
    info.licenseInfo = licenseInfo
    try {
      const docRef = await addDoc(collection(db, "driverInfo"), {
        userInfo: info,    
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigation.navigate("UserMenu");
    // if (licenseNumber && licensePhoto && isProfessionalDriver !== null) {
    // } else {
    //   Alert.alert('Incomplete Information', 'Please answer all questions before proceeding.');
    // }
  };

  const handleChoosePhoto = () => {
    const options = { noData: true };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Alert.alert('Error', 'There was an error picking the image.');
      } else if (response.assets && response.assets.length > 0) {
        const photoUri = response.assets[0].uri;
        setCarPhoto(photoUri);
        verifyDriverLicense(photoUri);
      }
    });
  };

  const verifyDriverLicense = async (photoUri) => {
    const formData = new FormData();
    formData.append('licenseImage', { uri: photoUri, type: 'image/jpeg', name: 'license.jpg' });

    try {
      const response = await axios.post('ioBM7y1VCX45pIxunQeLTXVFGk1Y5MgX', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ioBM7y1VCX45pIxunQeLTXVFGk1Y5MgX',
        },
      });

      console.log('Verification response:', response.data);
    } catch (error) {
      console.error('Verification error:', error);
      Alert.alert('Verification Error', 'Failed to verify the driver\'s license.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Upload Drivers License" onPress={handleChoosePhoto} />
      {carPhoto && <Image source={{ uri: carPhoto }} style={styles.image} />}
      <Button title="Next" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});

export default DriverLicenseInfo;
