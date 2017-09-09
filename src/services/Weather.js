import moment from 'moment';
import WeatherApiClient from './WeatherApiClient';
import Storage from '../utils/Storage';
import TemperatureUnit from '../utils/TemperatureUnit';

export default class Weather {
  constructor({ defaultUnit = TemperatureUnit.CELCIUS, apiKey = null, minNextUpdateMinutes = 10 } = {}) {
    this.defaultUnit = defaultUnit;
    this.apiKey = apiKey;
    this.minNextUpdateMinutes = minNextUpdateMinutes;

    this.storage = new Storage('WeatherApp');
    this.weatherApiClient = new WeatherApiClient({ apiKey: this.apiKey, defaultUnits: WeatherApiClient.UNITS_METRIC });
  }

  async getCurrent({ city, countryCode = null, unit = this.defaultUnit, force = false}) {
    try {
      let data = await this.storage.get('currentWeather');

      if (this.shouldUseDataFromStorage(data, force)) {
        console.log('🌈 FROM STORAGE');
        return data;
      }

      data = await this.weatherApiClient.getCurrent({ city, countryCode });
      data = this.transformApiData(data);
      await this.storage.set('currentWeather', data);

      console.log('🔥 FROM API');

      return data;
    } catch (error) {
      throw error;
    }
  }

  shouldUseDataFromStorage(data, force = false) {
    if (data === null || force) {
      return false;
    }

    return (moment().unix() - data.timestamp) < this.minNextUpdateMinutes * 60;
  }

  transformApiData(data) {
    return {
      id: data.id,
      timestamp: moment().unix(),
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
          name: data.weather[0].description,
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
}
