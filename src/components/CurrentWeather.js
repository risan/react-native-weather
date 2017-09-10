import React, { Component } from 'react';
import { View } from 'react-native';
import WeatherConditionHero from './WeatherConditionHero';

const CurrentWeather = ({ temperature, temperatureUnit, emoji, name, city }) => {
  return (
    <View>
      <WeatherConditionHero
        temperature={temperature}
        temperatureUnit={temperatureUnit}
        emoji={emoji}
        name={name}
        city={city}
      />
    </View>
  );
}

export default CurrentWeather;
