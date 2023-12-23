import React, { useState } from 'react';
import { View, Text, TextInput,Button,KeyboardAvoidingView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ setIsLoggedIn }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleGetStarted = () => {
    setShowLogin(true);
    // You can navigate to the login screen here if needed
  };

  const handleLogin = () => {
    // Assume your authentication logic here, and if successful, set isLoggedIn to true
    // For simplicity, let's consider the user is logged in if showLogin is true
    if (showLogin) {
      // Perform any additional authentication logic if needed

      // Update the isLoggedIn state in the App component
      setIsLoggedIn(true);
    } else {
      // Handle authentication failure
      console.log('Authentication failed. Please enter valid credentials.');
    }
  };

  return (
    <View style={styles.wrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <Image source={require('../assets/logo.png')} style={styles.image} />
        <View style={{alignItems:'center'}}>
          <Text style={styles.appName}>Dossierr</Text>
          <Text style={styles.description}>Your GPT powered legal assistant. Get started to start chatting with your case files.</Text>
        </View>
          {!showLogin ? (
            <>
              <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
            </>
          ) : (
            // Render your login screen component here
            <>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
              />
              <Button title="Log in" onPress={handleLogin} />
            </>
          )}

      <View style={styles.footer}>
        <Text style={styles.disclaimer}>Copyright © 2023 Dossierr. All rights reserved.</Text>
        <Text style={styles.version}>Version 1.0</Text>
      </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%", // 70% of the screen width
    padding: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Glass effect background color
    borderRadius: 20,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  getStartedButton: {
    backgroundColor: 'dodgerblue',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.2)',
    paddingTop: 10,
    alignItems: 'center',
  },
  disclaimer: {
    color: 'gray',
    fontSize: 10,
  },
  version: {
    color: 'gray',
    fontSize: 8,
    marginTop: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 0,
    paddingLeft: 10,
    width: 250,
    borderRadius: 5,
  },
});

export default WelcomeScreen;
