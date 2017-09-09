import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Temperature from './Temperature';
import Location from './Location';

export default class CurrentWeather extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Temperature temperature={this.props.temperature} unit={this.props.unit} style={styles.temperature} />
        <Text>{this.props.weatherCondition}</Text>
        <Location name={this.props.city} style={styles.location} />
        <Text>Updated {this.props.lastUpdatedAt}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  temperature: {
    fontSize: 50
  },
  location: {
    fontSize: 20
  }
});
