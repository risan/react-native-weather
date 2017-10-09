import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import WeatherConditionHero from './WeatherConditionHero';
import LocationFormModal from './LocationFormModal';

const CurrentWeather = ({ temperature, temperatureUnit, emoji, name, city, locationFormModalVisibility = false, onPressLocation, onPressLocationFormModalCancel, onSubmitEditingLocationFormModal }) => {
  return (
    <View style={styles.container}>
      <WeatherConditionHero
        temperature={temperature}
        temperatureUnit={temperatureUnit}
        emoji={emoji}
        name={name}
        city={city}
        onPressLocation={onPressLocation}
      />
      <LocationFormModal
        city={city}
        visibility={locationFormModalVisibility}
        onPressCancel={onPressLocationFormModalCancel}
        onSubmitEditing={onSubmitEditingLocationFormModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CurrentWeather;
