import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

const UserAdditionalInfo = ({ navigation }) => {
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
  const [homeAddress, setHomeAddress] = useState("");

  const handleSubmit = () => {
    navigation.navigate("UserSecurityInfo");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Emergency Contact Name"
        value={emergencyContactName}
        onChangeText={setEmergencyContactName}
        style={styles.input}
      />
      <TextInput
        placeholder="Emergency Contact Phone"
        keyboardType="phone-pad"
        value={emergencyContactPhone}
        onChangeText={setEmergencyContactPhone}
        style={styles.input}
      />
      <TextInput
        placeholder="Home Address"
        value={homeAddress}
        onChangeText={setHomeAddress}
        style={styles.input}
      />
      <Button title="Next" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default UserAdditionalInfo;
