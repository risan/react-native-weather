import React, { Component } from 'react';
import { View } from 'react-native';
import WeatherConditionHero from './WeatherConditionHero';
import LocationFormModal from './LocationFormModal';

const CurrentWeather = ({ temperature, temperatureUnit, emoji, name, city, locationFormModalVisibility = false, onPressLocation, onPressLocationFormModalCancel }) => {
  return (
    <View>
      <WeatherConditionHero
        temperature={temperature}
        temperatureUnit={temperatureUnit}
        emoji={emoji}
        name={name}
        city={city}
        onPressLocation={onPressLocation}
      />
      <LocationFormModal
        visibility={locationFormModalVisibility}
        onPressCancel={onPressLocationFormModalCancel}
      />
    </View>
  );
}

export default CurrentWeather;
