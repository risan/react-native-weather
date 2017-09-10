import React, { Component } from 'react';
import { Keyboard, Modal, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from './Button';
import KeyboardAvoidingView from './KeyboardAvoidingView';

export default class LocationFormModal extends Component {
  static defaultProps = {
    visibility: false
  }

  constructor(props) {
    super(props);

    this.state = {
      city: this.props.city
    };
  }

  handleSubmitEditing() {
    Keyboard.dismiss();

    this.props.onSubmitEditing(this.state.city);
  }

  render() {
    return (
      <Modal animationType="slide" transparent={false} visible={this.props.visibility} onShow={() => this.setState({ city: this.props.city })}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TextInput
            style={styles.textInput}
            value={this.state.city}
            placeholder="Enter City Name..."
            autoFocus={true}
            onChangeText={(text) => this.setState({ city: text })}
            onSubmitEditing={() => this.handleSubmitEditing()}
          />
          <Button type="warning" title="Save" onPress={() => this.handleSubmitEditing()} />
          <Button type="danger" title="Cancel" onPress={this.props.onPressCancel} />
        </KeyboardAvoidingView>
      </Modal>
    );
  }
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
