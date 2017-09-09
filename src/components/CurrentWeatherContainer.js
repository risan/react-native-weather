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
      temperature: 0,
      unit: TemperatureUnit.CELCIUS,
      weatherCondition: null,
      city: 'Stockholm',
      lastUpdatedAt: null
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
          weatherCondition: data.weather.condition.name,
          city: data.location.city,
          lastUpdatedAt: moment.unix(data.request_data.timestamp).fromNow()
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
        weatherCondition={this.state.weatherCondition}
        unit={this.state.unit}
        city={this.state.city}
        lastUpdatedAt={this.state.lastUpdatedAt}
      />
    );
  }
}
