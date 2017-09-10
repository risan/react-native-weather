import React, { Component } from 'react';
import { Alert } from 'react-native';
import moment from 'moment';
import CurrentWeather from './CurrentWeather';
import TemperatureUnit from '../utils/TemperatureUnit';
import Weather from '../services/Weather';
import env from '../../env';

export default class CurrentWeatherContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: 'Stockholm',
      temperature: 20,
      temperatureUnit: TemperatureUnit.CELCIUS,
      emoji: '⛅️',
      conditionName: 'few clouds',
      locationFormModalVisibility: false
    };

    this.weather = new Weather({ apiKey: env.OPEN_WEATHER_API_KEY });
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData({ city = this.state.city, unit = this.state.unit, updateState = true } = {}) {
    try {
      let data = await this.weather.getCurrent({ city, unit });

      console.log(data);

      if (! updateState) {
        return data;
      }

      this.setState(previousState => {
        return {
          city: data.location.city,
          temperature: data.weather.temperature,
          temperatureUnit: unit,
          emoji: data.weather.condition.emoji,
          conditionName: data.weather.condition.name
        };
      });
    } catch (error) {
      throw error;
    }
  }

  handlePressLocation() {
    this.setState({ locationFormModalVisibility: true });
  }

  handlePressLocationFormModalCancel() {
    this.setState({ locationFormModalVisibility: false });
  }

  async handleSubmitEditingLocationFromModal(city) {
    try {
      await this.fetchData({ city });
      this.setState({ locationFormModalVisibility: false });
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  render() {
    return (
      <CurrentWeather
        temperature={this.state.temperature}
        temperatureUnit={this.state.temperatureUnit}
        emoji={this.state.emoji}
        name={this.state.conditionName}
        city={this.state.city}
        locationFormModalVisibility={this.state.locationFormModalVisibility}
        onPressLocation={() => this.handlePressLocation()}
        onPressLocationFormModalCancel={() => this.handlePressLocationFormModalCancel()}
        onSubmitEditingLocationFormModal={(city) => this.handleSubmitEditingLocationFromModal(city)}
      />
    );
  }
}
