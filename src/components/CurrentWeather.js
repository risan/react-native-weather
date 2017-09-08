import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Temperature from './Temperature';

export default class CurrentWeather extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Temperature temperature={this.props.temperature} unit={this.props.unit} fontSize={50} />
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
  }
});
