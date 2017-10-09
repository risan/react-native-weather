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
      city: null,
      temperature: 0,
      temperatureUnit: TemperatureUnit.CELCIUS,
      emoji: '⛅️',
      conditionName: 'loading',
      locationFormModalVisibility: false
    };

    this.weather = new Weather({ apiKey: env.OPEN_WEATHER_API_KEY });
  }

  async componentDidMount() {
    await this.fetchPreviouslyStoredData();
    this.fetchData();
  }

  async fetchPreviouslyStoredData() {
    try {
      let data = await this.weather.getPreviouslyStoredCurrent();
      data !== null ? this.updateStateWithWeatherData(data) : this.setState({ city: 'Stockholm' });
    } catch (error) {
      throw error;
    }
  }

  async fetchData({ city = this.state.city, unit = this.state.unit, updateState = true } = {}) {
    console.log(city);
    try {
      let data = await this.weather.getCurrent({ city, unit });

      console.log(data);

      if (! updateState) {
        return data;
      }

      this.setState({ temperatureUnit: unit });
      this.updateStateWithWeatherData(data);
    } catch (error) {
      throw error;
    }
  }

  updateStateWithWeatherData(data) {
    this.setState(previousState => {
      return {
        city: data.location.city,
        temperature: data.weather.temperature,
        temperatureUnit: data.display_temperature_unit,
        emoji: data.weather.condition.emoji,
        conditionName: data.weather.condition.name
      };
    });
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
        onSubmitEditingLocationFormModal={city => this.handleSubmitEditingLocationFromModal(city)}
      />
    );
  }
}
