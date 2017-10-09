import MeasurementUnitConverter from './MeasurementUnitConverter';
import Storage from './Storage';
import Transformer from './Transformer';
import { Client } from '../OpenWeatherMap';
import TemperatureUnit from '../../utils/TemperatureUnit';

export default class Weather {
  constructor({ defaultUnit = TemperatureUnit.CELCIUS, apiKey = null, storageKey = 'Weather', defaultExpirationMinutes = 10 } = {}) {
    this.defaultUnit = defaultUnit;

    this.client = new Client({ apiKey: apiKey, defaultUnits: Client.UNITS_METRIC });
    this.storage = new Storage({ storageKey, defaultExpirationMinutes });
  }

  async getPreviouslyStoredCurrent(unit = this.defaultUnit) {
    try {
      let data = await this.storage.getCurrent();

      return data !== null ? MeasurementUnitConverter.convert(data, unit) : null;
    } catch (error) {
      throw error;
    }
  }

  async getCurrent({ city, countryCode = null, unit = this.defaultUnit, force = false}) {
    try {
      let data = await this.storage.getCurrentWithParams({ city, countryCode });

      if (data !== null && ! force) {
        console.log('🌈 FROM STORAGE');
        return MeasurementUnitConverter.convert(data, unit);
      }

      data = await this.client.getCurrent({ city, countryCode });
      data = Transformer.transform(data, { city, countryCode, displayTemperatureUnit: unit });
      await this.storage.setCurrent(data);

      console.log('🔥 FROM API');
      return MeasurementUnitConverter.convert(data, unit);
    } catch (error) {
      throw error;
    }
  }
}
