import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Switch,
  Text,
} from "react-native";

const DriverSecurityInfo = ({ navigation }) => {
  const [legalAcknowledgment, setLegalAcknowledgment] = useState(false);
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!legalAcknowledgment) {
      Alert.alert("Error", "You must accept the legal terms to proceed.");
      return;
    }
    Alert.alert(
      "Registration Complete",
      `ID: ${userID}\nYour account has been created.`
    );
  };

  return (
    <View style={styles.container}>
      <Switch
        value={legalAcknowledgment}
        onValueChange={setLegalAcknowledgment}
        style={styles.switch}
      />
      <Text> I agree to the Terms and Conditions.</Text>
      <TextInput
        placeholder="ID"
        value={userID}
        onChangeText={setUserID}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title="Submit Registration" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  switch: {
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default DriverSecurityInfo;
