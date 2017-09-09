import moment from 'moment';
import queryString from 'query-string';

export default class Client {
  static get UNITS_DEFAULT() {
    return null;
  }

  static get UNITS_METRIC() {
    return 'metric';
  }

  static get UNIT_IMPERIAL() {
    return 'imperial';
  }

  static get BASE_URL() {
    return 'https://api.openweathermap.org/data';
  }

  constructor({ baseUrl = Client.BASE_URL, version = '2.5', defaultUnits = Client.UNITS_METRIC, apiKey = null } = {}) {
    this.baseUrl = baseUrl;
    this.version = version;
    this.defaultUnits = defaultUnits;
    this.apiKey = apiKey;
  }

  async getCurrent({ city, countryCode = null, units = this.defaultUnits}) {
    let params = {
      q: countryCode === null ? city : `${city},${countryCode}`,
      units: units
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

      responseJson.timestamp = moment().unix();

      return responseJson;
    } catch (error) {
      throw error;
    }
  }

  buildUrl(url, params = {}) {
    return `${this.baseUrl}/${this.version}/${url}?${this.buildQueryParams(params)}`;
  }

  buildQueryParams(params = {}) {
    // Remove `units` param if it's null (default units).
    if (params.hasOwnProperty('units') && params.units === null) {
      delete params.units;
    }

    // Merge the constructor given api key with the rest of the params.
    let queryParams = Object.assign({ appid: this.apiKey }, params);

    return queryString.stringify(queryParams);
  }
}
