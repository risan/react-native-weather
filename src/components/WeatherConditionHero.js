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
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#FEFDCA'
  },
  location: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
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
    fontSize: 40
  },
  conditionName: {
    fontSize: 18
  }
});

export default WeatherConditionHero;
