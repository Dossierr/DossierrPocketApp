// GlassModal.js
import React from 'react';
import { Modal, View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GlassModal = ({ isVisible, onClose, cases, onSelectCase }) => {
  const handleCaseSelection = (caseItem) => {
    onSelectCase(caseItem);
    onClose(); // Close the modal when a case is selected
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Image
              style={styles.logo}
              source={require('../assets/logo.png')}
            />
            <Text style={styles.headerText}>Dossierr</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text>✕</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {/* Section 1: Select Case */}
            <View style={styles.modalSection}>
              <Text style={styles.sectionHeader}>Chat with your cases</Text>
              {cases.map((caseItem) => (
                <TouchableOpacity
                  key={caseItem.id}
                  style={styles.modalItem}
                  onPress={() => handleCaseSelection(caseItem)}
                >
                  <Text>{caseItem.title}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Divider */}
            <View style={styles.divider}></View>

            {/* Section 2: Court Cases */}
            <View style={styles.modalSection}>
              <Text style={styles.sectionHeader}>Chat met Openbare bronnen</Text>
              <TouchableOpacity style={styles.modalItem} onPress={() => console.log('Jurisprudentie pressed')}>
                <Text>Uitspraken rechtbank</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalItem} onPress={() => console.log('Wetboek pressed')}>
                <Text>Wetboek</Text>
              </TouchableOpacity>
            </View>

            {/* Divider */}
            <View style={styles.divider}></View>

            {/* Section 2: Court Cases */}
            <View style={styles.modalSection}>
              <Text style={styles.sectionHeader}>User </Text>
              <TouchableOpacity style={styles.modalItem} onPress={() => console.log('Jurisprudentie pressed')}>
                <Text>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalItem} onPress={() => console.log('Wetboek pressed')}>
                <Text>Log out</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* Copyright disclaimer and version number */}
          <View style={styles.footer}>
            <Text style={styles.disclaimer}>Copyright © 2023 Dossierr. All rights reserved.</Text>
            <Text style={styles.version}>Version 1.0</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 5
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  modalItem: {
    marginBottom: 20,
  },
  logoutContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.2)',
    paddingTop: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: 'gray',
    marginLeft: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    marginBottom: 20,
  },
  modalSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'gray',
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
});
export default GlassModal;
