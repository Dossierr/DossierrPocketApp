import React, { useState } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground,
  SafeAreaView,
  Text, // Import Text component
} from 'react-native';
import ChatHeader from './components/ChatHeader';
import ChatScrollView from './components/ChatScrollView';
import ChatInput from './components/ChatInput';
import WelcomeScreen from './components/WelcomeScreen';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'Harvey AI', text: "Hey, how's it going?" },
    { sender: 'You', text: 'Not bad! What about you?' },
    // Add more initial messages as needed
  ]);
  const [cases, setCases] = useState([
    { id: 1, title: 'Case 13' },
    { id: 2, title: 'Case 23' },
    { id: 3, title: 'Case 33' },
    // Add more cases as needed
  ]);
  const [activeCase, setActiveCase] = useState(null);

  const handleSend = (newMessage) => {
    if (isLoggedIn) {
      if (activeCase) {
        const updatedMessages = [...messages, { sender: 'You', text: newMessage }];
        setMessages(updatedMessages);
      } else {
        console.log('Please select a case before sending a message.');
      }
    } else {
      console.log('Welcome! Please log in.');
    }
  };

  const setActiveCaseHandler = (selectedCase) => {
    setActiveCase(selectedCase);
    console.log(selectedCase);
  };

  // Conditionally render the entire component based on the login state
  if (!isLoggedIn) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ImageBackground
          style={styles.background}
          source={require('./assets/blurrymesh.png')}
          blurRadius={10}
        >
          <SafeAreaView style={styles.safeArea}>
          <WelcomeScreen setIsLoggedIn={setIsLoggedIn} />
          </SafeAreaView>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ImageBackground
        style={styles.background}
        source={require('./assets/blurrymesh.png')}
        blurRadius={10}
      >
        <SafeAreaView style={styles.safeArea}>
          <ChatHeader
            title={activeCase ? `Chat with ${activeCase.title}` : 'Select a Case'}
            cases={cases}
            onSelectCase={setActiveCaseHandler}
          />
          <ChatScrollView messages={messages} />
          <ChatInput onSend={handleSend} />
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    paddingTop: 30,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
