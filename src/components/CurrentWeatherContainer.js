import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import TemperatureUnit from '../utils/TemperatureUnit';
import Storage from '../utils/Storage';
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

    this.storage = new Storage('WeatherApp');
    this.weatherApiClient = new WeatherApiClient({ apiKey: env.OPEN_WEATHER_API_KEY });
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      let data = await this.storage.get('currentWeather');

      if (data !== null) {
        console.log('FROM STORAGE');
        console.log(data);

        this.setState(previousState => {
          return { temperature: data.main.temp };
        });

        return data;
      }

      data = await this.weatherApiClient.getCurrent({
        city: this.state.city,
        unit: this.state.unit
      });

      await this.storage.set('currentWeather', data);

      console.log('FROM API');
      console.log(data);

      this.setState(previousState => {
        return { temperature: data.main.temp };
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
