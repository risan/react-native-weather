export default class TemperatureUnit {
  static get CELCIUS() {
    return 'Celcius';
  }

  static get FAHRENHEIT() {
    return 'Fahrenheit';
  }

  static get KELVIN() {
    return 'Kelvin';
  }

  static getSymbolForUnit(unit) {
    switch (unit) {
      case TemperatureUnit.CELCIUS:
        return '°C';
      case TemperatureUnit.FAHRENHEIT:
        return '°F';
      case TemperatureUnit.KELVIN:
        return 'K';
    }
  }

  static convertCelciusToFahrenheit(value) {
    return (1.8 * value) + 32;
  }

  static convertCelciusToKelvin(value) {
    return value + 273.15;
  }
}
