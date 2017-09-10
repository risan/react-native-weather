import TemperatureUnit from '../../utils/TemperatureUnit';

export default class MeasurementUnitConverter {
  static convert(data, unit) {
    switch (unit) {
      case TemperatureUnit.CELCIUS:
        return data;
      case TemperatureUnit.FAHRENHEIT:
      case TemperatureUnit.KELVIN:
        return MeasurementUnitConverter.convertTemperatureProperties(data, unit);
    }
  }

  static convertTemperatureProperties(data, unit) {
    ({ weather } = data);

    let replacements = {
      temperature_unit: unit,
      temperature: MeasurementUnitConverter.convertCelcius(weather.temperature),
      temperature_range: {
        min: MeasurementUnitConverter.convertCelcius(weather.temperature_range.min),
        max: MeasurementUnitConverter.convertCelcius(weather.temperature_range.max)
      }
    };

    let newWeatherProperty = Object.assign({}, weather, replacements);

    return Object.assign({}, data, { weather: newWeatherProperty });
  }

  static convertCelcius(value, unit) {
    return TemperatureUnit[MeasurementUnitConverter.getCelciusConverterMethod(unit)](value);
  }

  static getCelciusConverterMethod(unit) {
    switch (unit) {
      case TemperatureUnit.FAHRENHEIT:
        return 'convertCelciusToFahrenheit';
      case TemperatureUnit.KELVIN:
        return 'convertCelciusToKelvin';
    }
  }
}
