import React from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from './Button';
import KeyboardAvoidingView from './KeyboardAvoidingView';

const LocationFormModal = ({ visibility = false, onPressCancel }) => {
  return (
    <Modal animationType="slide" transparent={false} visible={visibility}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Enter City..." />
        <Button type="warning" title="Save" onPress={onPressCancel} />
        <Button type="danger" title="Cancel" onPress={onPressCancel} />
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#AA96DA'
  },
  textInput: {
    fontSize: 18,
    lineHeight: 30,
    height: 50,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  }
});

export default LocationFormModal;
