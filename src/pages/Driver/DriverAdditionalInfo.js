import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, Text } from 'react-native';

const DriverAdditionalInfo = ({ navigation }) => {
  const [isProfessional, setIsProfessional] = useState(null);

  const handleSelection = (selection) => {
    setIsProfessional(selection);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Are you a professional driver?</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Yes"
          onPress={() => handleSelection(true)}
          color={isProfessional ? "blue" : "#ccc"}
        />
        <Button
          title="No"
          onPress={() => handleSelection(false)}
          color={isProfessional === false ? "blue" : "#ccc"}
        />
      </View>
      <View style={styles.nextButton}>
        <Button
          title="Next"
          onPress={() => navigation.navigate('DriverSecurityInfo')}
          disabled={isProfessional === null}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  nextButton: {
    marginTop: 20,
  },
});

export default DriverAdditionalInfo;
