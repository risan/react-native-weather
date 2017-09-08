import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Temperature from './Temperature';
import Weather from '../services/Weather';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: 0,
      isLoading: false
    };
  }

  onPressButton() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ isLoading: true });

    try {
      let temperature = await Weather.fetch();
      this.setState({ temperature: temperature })
    } catch (error) {
      console.log(error);
    }

    this.setState({ isLoading: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <Temperature isLoading={this.state.isLoading} temperature={this.state.temperature} />
        <Button
          onPress={() => this.onPressButton() }
          title="Load Data"
        />
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
