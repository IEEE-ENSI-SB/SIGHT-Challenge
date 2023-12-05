// Register.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const registerUser = (name, email, password) => {
    console.log(`Registering user with name: ${name}, email: ${email}, password: ${password}`);
    
  };

  const navigateToLogin = () => {
    navigation.navigate('Log In'); 
  };

  return (
    <View style={styles.container}>
      <Image source={require('./images/logup.jpg')} style={styles.image} />
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Full Name'
          onChangeText={(name) => setName(name)}
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Email'
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Password'
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity onPress={() => registerUser(name, email, password)} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.loginLink}>If you're already registered, log in here.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 36,
    marginLeft: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    height: 70,
    width: 250,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
  },
  loginLink: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3498db',
    textDecorationLine: 'underline',
  },
});

export default Register;