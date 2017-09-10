import React from 'react';
import { Keyboard, KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Button from './Button';

const LocationFormModal = ({ visibility = false, onPressCancel }) => {
  return (
    <Modal animationType="slide" transparent={false} visible={visibility}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.contentContainer}>
            <TextInput style={styles.textInput} placeholder="Enter City..." />
            <Button type="warning" title="Save" onPress={onPressCancel} />
            <Button type="danger" title="Cancel" onPress={onPressCancel} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
});

export default LocationFormModal;
