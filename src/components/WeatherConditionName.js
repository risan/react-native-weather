import React from 'react';
import { Text } from 'react-native';

const WeatherConditionName = ({ name, style = {} }) => {
  return <Text style={style}>{name}</Text>;
}

export default WeatherConditionName;
