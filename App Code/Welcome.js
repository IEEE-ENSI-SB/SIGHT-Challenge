// Welcome.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Welcome = () => {
  const [buttonPressed, setButtonPressed] = useState(false);
  const navigation = useNavigation();

 
  
  const handleButtonPress = () => {
    navigation.navigate('Log In');
   
  };

  const handleButtonRelease = () => {
    setButtonPressed(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.aquaMonitorText}>AquaMonitor</Text>
      <Image
        source={require('./images/welcome-photo.jpg')}
        style={styles.image}
      />
      <TouchableOpacity
        style={[styles.button, buttonPressed && styles.buttonPressed]}
        onPress={handleButtonPress}
        onLongPress={handleButtonPress}
        onPressOut={handleButtonRelease}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', 
    marginBottom: 10,
  },
  aquaMonitorText: {
    fontSize: 48, 
    fontWeight: 'bold',
    color: '#3498db', 
    marginBottom: 20, 
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1', 
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonPressed: {
    opacity: 0.8, 
  },
});

export default Welcome;
