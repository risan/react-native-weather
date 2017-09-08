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
}
