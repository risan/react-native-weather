import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Location = ({ name, onPress, style = {} }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{name}</Text>
    </TouchableOpacity>
  );
}

export default Location;
