// ChatHeader.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import GlassModal from './GlassModal';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatHeader = ({ title, cases, onSelectCase }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
      <View style={styles.sidebarButton}>
        <TouchableOpacity onPress={openModal}>
          <Icon name="bars" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <GlassModal isVisible={isModalOpen} onClose={closeModal} cases={cases} onSelectCase={onSelectCase} />
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
