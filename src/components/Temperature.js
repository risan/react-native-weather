import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default class Temperature extends Component {
  static defaultProps = {
    unit: 'Celcius'
  }

  static getUnitSymbol(unit) {
    switch (unit) {
      case 'Celcius':
        return '°C';
      case 'Fahrenheit':
        return '°F';
      case 'Kelvin':
        return 'K';
    }
  }

  render() {
    return (
      <View>
        {this.props.isLoading ? (
          <ActivityIndicator animating={true} size="large" />
        ) : (
          <Text style={styles.temperature}>
            {this.props.temperature}{Temperature.getUnitSymbol(this.props.unit)}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  temperature: {
    fontSize: 42,
    color: 'tomato'
  }
});
