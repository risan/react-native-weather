import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Location from './Location';
import Temperature from './Temperature';
import WeatherEmoji from './WeatherEmoji';
import WeatherConditionName from './WeatherConditionName';

const WeatherConditionHero = ({ temperature, temperatureUnit, emoji, name, city, onPressLocation }) => {
  return (
    <View style={styles.container}>
      <Location name={city.toUpperCase()} onPress={onPressLocation} style={styles.location} />
      <View style={styles.detailContainer}>
        <WeatherEmoji emoji={emoji} style={styles.emoji} />
        <View style={styles.temperatureContainer}>
          <Temperature temperature={temperature} unit={temperatureUnit} style={styles.temperature} />
          <WeatherConditionName name={name} style={styles.conditionName} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingBottom: 30,
    backgroundColor: '#F6416C'
  },
  location: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center'
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
  }
});

export default WeatherConditionHero;
