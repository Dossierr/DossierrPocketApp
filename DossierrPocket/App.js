import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, ImageBackground, SafeAreaView } from 'react-native';
import ChatHeader from './components/ChatHeader';
import ChatScrollView from './components/ChatScrollView';
import ChatInput from './components/ChatInput';

const App = () => {
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
    // Check if there is an active case before sending a message
    if (activeCase) {
      const updatedMessages = [...messages, { sender: 'You', text: newMessage }];
      setMessages(updatedMessages);
    } else {
      // Handle the case where no case is selected
      console.log('Please select a case before sending a message.');
    }
  };

  const setActiveCaseHandler = (selectedCase) => {
    // Set the active case when a case is selected
    setActiveCase(selectedCase);
    console.log(selectedCase)
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
