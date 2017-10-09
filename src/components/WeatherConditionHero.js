import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Location from './Location';
import Temperature from './Temperature';
import WeatherEmoji from './WeatherEmoji';
import WeatherConditionName from './WeatherConditionName';

const WeatherConditionHero = ({ temperature, temperatureUnit, emoji, name, city, onPressLocation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <WeatherEmoji emoji={emoji} style={styles.emoji} />
        <View style={styles.temperatureContainer}>
          <Temperature temperature={temperature} unit={temperatureUnit} style={styles.temperature} />
          <WeatherConditionName name={name} style={styles.conditionName} />
        </View>
      </View>
      <Location name={city ? city.toUpperCase() : 'LOCATION'} onPress={onPressLocation} style={styles.location} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F6416C'
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  emoji: {
    flex: 1,
    fontSize: 80,
    textAlign: 'right',
    marginRight: 20
  },
  temperatureContainer: {
    flex: 1
  },
  temperature: {
    fontSize: 40,
    color: '#fff'
  },
  conditionName: {
    fontSize: 18,
    color: '#fff'
  },
  location: {
    fontSize: 26,
    color: '#fff',
    textAlign: 'center'
  }
});

export default WeatherConditionHero;
