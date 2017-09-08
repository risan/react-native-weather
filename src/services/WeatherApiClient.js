import queryString from 'query-string';
import TemperatureUnit from '../utils/TemperatureUnit';

export default class WeatherApiClient {
  constructor({ baseUrl = WeatherApiClient.BASE_URL, version = '2.5', unit = TemperatureUnit.CELCIUS, apiKey = null } = {}) {
    this.baseUrl = baseUrl;
    this.version = version;
    this.unit = unit;
    this.apiKey = apiKey;
  }

  static get BASE_URL() {
    return 'https://api.openweathermap.org/data';
  }

  async get(city, countryCode = null) {
    let params = countryCode === null ? { q: city } : { q: `${city},${countryCode}` };

    try {
      return await this.fetch('weather', params);
    } catch (error) {
      throw error;
    }
  }

  async fetch(url, params = {}) {
    try {
      let response = await fetch(this.buildUrl(url, params));
      let responseJson = await response.json();

      if (response.status !== 200) {
        throw new Error(responseJson.message);
      }

      return responseJson;
    } catch (error) {
      throw error;
    }
  }

  buildUrl(url, params = {}) {
    let queryParams = Object.assign(this.getDefaultParams(), params);

    return `${this.baseUrl}/${this.version}/${url}?${queryString.stringify(queryParams)}`;
  }

  getDefaultParams() {
    return Object.assign({ APPID: this.apiKey }, this.getUnitParam());
  }

  getUnitParam() {
    switch (this.unit) {
      case TemperatureUnit.CELCIUS:
        return { units: 'metric' };
      case TemperatureUnit.KELVIN:
        return { units: 'imperial' };
      default:
        return {};
    }
  }
}
