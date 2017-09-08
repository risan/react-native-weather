import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import TemperatureUnit from '../utils/TemperatureUnit';
import WeatherApiClient from '../services/WeatherApiClient';
import env from '../../env';

export default class CurrentWeatherContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: 0,
      unit: TemperatureUnit.CELCIUS,
      city: 'Stockholm'
    };

    this.weatherApiClient = new WeatherApiClient({ apiKey: env.OPEN_WEATHER_API_KEY });
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      let responseJson = await this.weatherApiClient.getCurrent({
        city: this.state.city,
        unit: this.state.unit
      });

      console.log(responseJson);

      this.setState(previousState => {
        return { temperature: responseJson.main.temp };
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <CurrentWeather
        temperature={this.state.temperature}
        unit={this.state.unit}
      />
    );
  }
}
