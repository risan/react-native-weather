import React from 'react';
import { Text } from 'react-native';

const Location = ({ name, style = {} }) => {
  return (
    <Text style={style}>
      {name}
    </Text>
  );
}

export default Location;
