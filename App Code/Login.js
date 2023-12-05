import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const loginUser = (email, password) => {
    console.log(`Logging in with email: ${email}, password: ${password}`);
    navigation.navigate('Main Page');
  };

  const navigateToRegistration = () => {
    navigation.navigate('Log Up'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In </Text>
      <Image source={require('./images/loginpagee.jpg')} style={styles.image} />
      <View style={styles.inputContainer}>
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
      <TouchableOpacity onPress={() => loginUser(email, password)} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToRegistration} style={styles.registerLink}>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
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
  title: {
    fontWeight: 'bold',
    fontSize: 36,
    marginBottom: 20,
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
    marginTop: 50,
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
  registerLink: {
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  registerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Login;