import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = ({ title, type = "default", style = {}, styleText = {}, onPress }) => {
  const stylesType = stylesVariations.hasOwnProperty(type) ? stylesVariations[type] : {};

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, stylesType.button, style]}>
        <Text style={[styles.buttonText, stylesType.buttonText, styleText]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#EAEAEA',
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    lineHeight: 30,
    textAlign: 'center'
  }
});

const stylesVariations = {
  warning: StyleSheet.create({
    button: {
      backgroundColor: '#FFDE7D'
    },
    buttonText: {
      //
    }
  }),
  danger: StyleSheet.create({
    button: {
      backgroundColor: '#E23E57'
    },
    buttonText: {
      color: '#fff'
    }
  })
};

export default Button;
