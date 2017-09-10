import React from 'react';
import { Keyboard, KeyboardAvoidingView as BaseKeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const KeyboardAvoidingView = ({ children, behavior = "padding", style = {}, onPressContainer = Keyboard.dismiss }) => {
  return (
    <BaseKeyboardAvoidingView behavior={behavior} style={styles.container}>
      <TouchableWithoutFeedback onPress={onPressContainer}>
        <View style={style}>{children}</View>
      </TouchableWithoutFeedback>
    </BaseKeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default KeyboardAvoidingView;
