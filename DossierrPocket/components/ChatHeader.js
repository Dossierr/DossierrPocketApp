import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatHeader = ({ title }) => {
  return (
    <View style={styles.headerRow}>
      <View style={styles.sidebarButton}>
        <TouchableOpacity onPress={() => console.log('Open Sidebar')}>
          <Icon name="cog" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    zIndex: 2,
  },
});

export default ChatHeader;
