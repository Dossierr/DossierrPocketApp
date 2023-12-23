import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import ChatHeader from './components/ChatHeader';
import ChatScrollView from './components/ChatScrollView';
import ChatInput from './components/ChatInput';

const App = () => {
  const [messages, setMessages] = useState([
    { sender: 'Friend', text: "Hey, how's it going?" },
    { sender: 'You', text: 'Not bad! What about you?' },
    // Add more initial messages as needed
  ]);

  const [inputText, setInputText] = useState('');

  const handleSend = (newMessage) => {
    const updatedMessages = [...messages, { sender: 'You', text: newMessage }];
    setMessages(updatedMessages);
  };


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
        <ChatHeader title="The Butch Case" />
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  sendButtonText: {
    color: 'white',
  },
});

export default App;
