import React, { useEffect, useRef } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ChatScrollView = ({ messages }) => {
  const scrollViewRef = useRef();

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
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
  );
};

const styles = StyleSheet.create({
  glassContent: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingBottom: 30,
  },
  chatHistory: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  friendChatBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  userChatBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
  sender: {
    fontWeight: 'bold',
    color: 'blue',
    marginRight: 5,
  },
  receiver: {
    fontWeight: 'bold',
    color: 'green',
    marginRight: 5,
  },
  messageText: {
    color: '#333',
  },
  spacingView: {
    height: 20,
  },
});

export default ChatScrollView;
