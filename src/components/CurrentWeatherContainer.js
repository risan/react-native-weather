import React, { Component } from 'react';
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
      temperature: 0,
      temperatureUnit: TemperatureUnit.CELCIUS,
      emoji: null,
      conditionName: null
    };

    this.weather = new Weather({ apiKey: env.OPEN_WEATHER_API_KEY });
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      let data = await this.weather.getCurrent({
        city: this.state.city,
        unit: this.state.unit
      });

      console.log(data);

      this.setState(previousState => {
        return {
          temperature: data.weather.temperature,
          emoji: data.weather.condition.emoji,
          conditionName: data.weather.condition.name
        };
      });
    } catch (error) {
      console.log(error);
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
      />
    );
  }
}
