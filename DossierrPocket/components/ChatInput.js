// ChatInput.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ChatInput = ({ onSend }) => {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() !== '') {
      onSend(inputText);
      setInputText('');
    }
  };

  return (
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
  );
};

const styles = StyleSheet.create({
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

export default ChatInput;
