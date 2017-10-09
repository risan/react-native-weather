import WeatherConditionText from './WeatherConditionText';
import WeatherConditionEmoji from './WeatherConditionEmoji';
import TemperatureUnit from '../../utils/TemperatureUnit';

export default class Transformer {
  static transform(data, { city, countryCode, displayTemperatureUnit = TemperatureUnit.CELCIUS }) {
    return {
      id: data.id,
      timestamp: data.timestamp,
      display_temperature_unit: displayTemperatureUnit,
      request_params: {
        city: city,
        country_code: countryCode
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
          emoji: WeatherConditionEmoji.getForCode(data.weather[0].id, Transformer.isAtNight(data)),
          group: data.weather[0].main
        },
        temperature: data.main.temp,
        temperature_unit: TemperatureUnit.CELCIUS,
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

  static isAtNight({ timestamp, sys: { sunrise, sunset } }) {
    if (timestamp < sunrise && timestamp < sunset) {
      return true;
    }

    if (timestamp >= sunrise && timestamp < sunset) {
      return false;
    }

    if (timestamp > sunrise && timestamp >= sunset) {
      return true;
    }
  }
}
