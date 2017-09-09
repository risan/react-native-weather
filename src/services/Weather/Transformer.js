import WeatherConditionText from './WeatherConditionText';
import WeatherConditionEmoji from './WeatherConditionEmoji';

export default class Transformer {
  static transform(data, { city, countryCode }) {
    return {
      id: data.id,
      timestamp: data.timestamp,
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
          emoji: WeatherConditionEmoji.getForCode(data.weather[0].id),
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
