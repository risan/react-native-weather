import React from 'react';
import { Text } from 'react-native';

const WeatherEmoji = ({ emoji, style = {} }) => {
  return <Text style={style}>{emoji}</Text>;
}

export default WeatherEmoji;
