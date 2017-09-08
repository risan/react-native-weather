import queryString from 'query-string';
import TemperatureUnit from '../utils/TemperatureUnit';

export default class WeatherApiClient {
  constructor({ baseUrl = WeatherApiClient.BASE_URL, version = '2.5', defaultUnit = TemperatureUnit.CELCIUS, apiKey = null } = {}) {
    this.baseUrl = baseUrl;
    this.version = version;
    this.defaultUnit = defaultUnit;
    this.apiKey = apiKey;
  }

  static get BASE_URL() {
    return 'https://api.openweathermap.org/data';
  }

  async getCurrent({ city, countryCode = null, unit = this.defaultUnit}) {
    let params = {
      q: countryCode === null ? city : `${city},${countryCode}`,
      unit: unit
    };

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
    return `${this.baseUrl}/${this.version}/${url}?${this.buildQueryParams(params)}`;
  }

  buildQueryParams(params = {}) {
    // Convert our custom `unit` param to OpenWeatherMap `units` param.
    if (params.hasOwnProperty('unit')) {
      if (params.unit !== TemperatureUnit.FAHRENHEIT) {
        params.units = this.convertToUnitsParam(params.unit);
        delete params.unit;
      }
    }

    // Convert our custom `apiKey` param to OpenWeatherMap `APPID` param.
    if (params.hasOwnProperty('apiKey')) {
      params.APPID = params.apiKey;
      delete params.apiKey;
    }

    // Merge the constructor given api key with the rest of the params.
    let queryParams = Object.assign({ APPID: this.apiKey }, params);

    return queryString.stringify(queryParams);
  }

  // Convert to OpenWeatherMap API `units` param.
  convertToUnitsParam(unit) {
    switch (unit) {
      case TemperatureUnit.CELCIUS:
        return 'metric';
      case TemperatureUnit.KELVIN:
        return 'imperial';
    }
  }
}
