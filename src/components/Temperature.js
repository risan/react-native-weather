import React from 'react';
import { Text } from 'react-native';
import TemperatureUnit from '../utils/TemperatureUnit';

const Temperature = ({ temperature, unit = TemperatureUnit.CELCIUS, style = {}, decimalPlaces = 0 }) => {
  return (
    <Text style={style}>
      {temperature.toFixed(decimalPlaces)}{TemperatureUnit.getSymbolForUnit(unit)}
    </Text>
  );
}

export default Temperature;
