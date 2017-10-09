import moment from 'moment';
import BaseStorage from '../../utils/Storage';

export default class Storage {
  static get KEY_CURRENT() {
    return 'current';
  }

  constructor({ storageKey = 'Weather', defaultExpirationMinutes = 10 }) {
    this.storage = new BaseStorage(storageKey);
    this.defaultExpirationMinutes = defaultExpirationMinutes;
  }

  async setCurrent(data) {
    try {
      await this.set(Storage.KEY_CURRENT, data);
    } catch (error) {
      throw error;
    }
  }

  async set(key, data) {
    try {
      await this.storage.set(key, data);
    } catch (error) {
      throw error;
    }
  }

  async getCurrent() {
    try {
      return await this.get(Storage.KEY_CURRENT);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentWithParams(requestParams = {}, expirationMinutes = this.defaultExpirationMinutes) {
    try {
      return await this.get(Storage.KEY_CURRENT, requestParams, expirationMinutes);
    } catch (error) {
      throw error;
    }
  }

  async get(key, requestParams = null, expirationMinutes = 0) {
    try {
      let data = await this.storage.get(key);

      if (data === null) {
        return null;
      }

      if (requestParams !== null && this.hasDifferentRequestParams(data, requestParams)) {
        return null;
      }

      if (expirationMinutes !== 0 && this.isExpired(data, expirationMinutes)) {
        return null;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  hasDifferentRequestParams({ request_params: prevParams }, { city, countryCode }) {
    return prevParams.city !== city ||  prevParams.country_code !== countryCode;
  }

  isExpired({ timestamp }, expirationMinutes = this.defaultExpirationMinutes) {
    return (moment().unix() - timestamp) > expirationMinutes * 60;
  }
}
