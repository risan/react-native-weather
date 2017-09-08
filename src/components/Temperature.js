import React from 'react';
import { Text } from 'react-native';
import TemperatureUnit from '../utils/TemperatureUnit';

const Temperature = ({ temperature, unit = TemperatureUnit.CELCIUS, fontSize = 16 }) => {
  return (
    <Text style={{ fontSize: fontSize }}>
      {temperature}{TemperatureUnit.getSymbolForUnit(unit)}
    </Text>
  );
}

export default Temperature;
