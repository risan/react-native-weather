import React from 'react';
import { Button, Keyboard, KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

const LocationFormModal = ({ visibility = false, onPressCancel }) => {
  return (
    <Modal animationType="slide" transparent={false} visible={visibility}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.contentContainer}>
            <TextInput style={styles.textInput} placeholder="Enter City..." />
            <TouchableOpacity onPress={onPressCancel}>
              <View style={styles.button}><Text style={styles.buttonText}>Save</Text></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressCancel}>
              <View style={[styles.button, { backgroundColor: '#F6416C' }]}><Text style={[styles.buttonText, { color: '#fff' }]}>Cancel</Text></View>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = {
  button: {
    padding: 12,
    backgroundColor: '#FFDE7D',
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center'
  },
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#AA96DA'
  },
  textInput: {
    height: 50,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  }
};

export default LocationFormModal;
