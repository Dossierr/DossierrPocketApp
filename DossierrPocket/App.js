import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [messages, setMessages] = useState([
    { sender: 'Friend', text: "Hey, how's it going?" },
    { sender: 'You', text: 'Not bad! What about you?' },
    // Add more initial messages as needed
  ]);

  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef();

  const handleSend = () => {
    if (inputText.trim() !== '') {
      const updatedMessages = [...messages, { sender: 'You', text: inputText }];
      setMessages(updatedMessages);
      setInputText('');
    }
  };

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

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
          <View style={styles.headerRow}>
            <View style={styles.sidebarButton}>
              <TouchableOpacity onPress={() => console.log('Open Sidebar')}>
                <Icon name="cog" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Your Big White Title</Text>
          </View>
          <ScrollView
            ref={scrollViewRef}
            style={styles.glassContent}
            contentContainerStyle={styles.chatHistory}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={() => {
              scrollViewRef.current.scrollToEnd({ animated: true });
            }}
          >
            {messages.map((message, index) => (
              <View key={index} style={message.sender === 'Friend' ? styles.friendChatBubble : styles.userChatBubble}>
                <Text style={message.sender === 'Friend' ? styles.sender : styles.receiver}>{message.sender}:</Text>
                <Text style={styles.messageText}>{message.text}</Text>
              </View>
            ))}
            <View style={styles.spacingView}>
            <Text></Text>
          </View>
          </ScrollView>
          
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type your message..."
              value={inputText}
              onChangeText={(text) => setInputText(text)}
              onSubmitEditing={handleSend}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
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
    paddingTop: 30, // Adjust top padding as needed
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 2,
  },
  sidebarButton: {
    zIndex: 2,
    padding: 5,
  },
  glassContent: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingBottom:30,
  },
  chatHistory: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    marginBottom: 10,
  },
  friendChatBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
    marginBottom:5,
  },
  userChatBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
    alignSelf: 'flex-end',
    marginBottom:5,
  },
  sender: {
    fontWeight: 'bold',
    color: 'blue', // Friend's messages color
    marginRight: 5,
  },
  receiver: {
    fontWeight: 'bold',
    color: 'green', // Your messages color
    marginRight: 5,
  },
  messageText: {
    color: '#333',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    zIndex: 2,
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
  spacingView: {
    height: 20, // Adjust the height as needed for spacing
  },
});

export default App;
