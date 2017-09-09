import moment from 'moment';
import { Client } from '../OpenWeatherMap';
import Storage from '../../utils/Storage';
import TemperatureUnit from '../../utils/TemperatureUnit';
import WeatherConditionText from './WeatherConditionText';
import WeatherConditionEmoji from './WeatherConditionEmoji';

export default class Weather {
  constructor({ defaultUnit = TemperatureUnit.CELCIUS, apiKey = null, storageKey = 'Weather', minNextUpdateMinutes = 10 } = {}) {
    this.defaultUnit = defaultUnit;
    this.apiKey = apiKey;
    this.minNextUpdateMinutes = minNextUpdateMinutes;

    this.storage = new Storage(storageKey);
    this.client = new Client({ apiKey: this.apiKey, defaultUnits: Client.UNITS_METRIC });
  }

  async getCurrent({ city, countryCode = null, unit = this.defaultUnit, force = false}) {
    try {
      let data = await this.storage.get('currentWeather');

      if (this.shouldUseDataFromStorage(data, city, countryCode, force)) {
        console.log('🌈 FROM STORAGE');
        return this.convertMeasurementUnit(data, unit);
      }

      data = await this.client.getCurrent({ city, countryCode });
      data = this.transformApiData(data, city, countryCode);
      await this.storage.set('currentWeather', data);

      console.log('🔥 FROM API');
      return this.convertMeasurementUnit(data, unit);
    } catch (error) {
      throw error;
    }
  }

  shouldUseDataFromStorage(data, city, countryCode, force) {
    if (data === null || this.hasDifferentRequestData(data, city, countryCode) || force) {
      return false;
    }

    return (moment().unix() - data.request_data.timestamp) < this.minNextUpdateMinutes * 60;
  }

  hasDifferentRequestData(data, city, countryCode) {
    return data.request_data.city !== city || data.request_data.countryCode !== countryCode;
  }

  transformApiData(data, city, countryCode, timestamp = moment().unix()) {
    return {
      id: data.id,
      request_data: {
        city: city,
        countryCode: countryCode,
        timestamp: timestamp
      },
      location: {
        city: data.name,
        country_code: data.sys.country,
        coordinate: {
          lat: data.coord.lat,
          lng: data.coord.lon
        }
      },
      weather: {
        calculated_at: data.dt,
        condition: {
          id: data.weather[0].id,
          name: WeatherConditionText.getForCode(data.weather[0].id),
          emoji: WeatherConditionEmoji.getForCode(data.weather[0].id),
          group: data.weather[0].main
        },
        temperature: data.main.temp,
        temperature_range: {
          min: data.main.temp_min,
          max: data.main.temp_max
        },
        humidity_percentage: data.main.humidity,
        atmospheric_pressure: data.main.pressure,
        cloudiness_percentage: data.clouds.all,
        wind: {
          speed: data.wind.speed,
          direction: data.wind.deg
        }
      },
      astronomy: {
        sunrise_at: data.sys.sunrise,
        sunset_at: data.sys.sunset
      }
    };
  }

  convertMeasurementUnit(data, unit) {
    switch (unit) {
      case TemperatureUnit.CELCIUS:
        return data;
      case TemperatureUnit.FAHRENHEIT:
        return Object.assign({}, data, this.convertTemperatureUnit(data, 'convertCelciusToFahrenheit'));
      case TemperatureUnit.KELVIN:
        return Object.assign({}, data, this.convertTemperatureUnit(data, 'convertCelciusToKelvin'));
    }
  }

  convertTemperatureUnit({ weather }, converterMethod) {
    let replacements = {
      temperature: TemperatureUnit[converterMethod](weather.temperature),
      temperature_range: {
        min: TemperatureUnit[converterMethod](weather.temperature_range.min),
        max: TemperatureUnit[converterMethod](weather.temperature_range.max)
      }
    };

    return { weather: Object.assign({}, weather, replacements) };
  };
}
