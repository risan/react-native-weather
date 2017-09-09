import { WeatherConditionCode } from '../OpenWeatherMap';

export default class WeatherConditionText {
  static getForCode(code) {
    switch (code) {
      // Thunderstorm
      case WeatherConditionCode.THUNDERSTORM_AND_RAIN_LIGHT:
      case WeatherConditionCode.THUNDERSTORM_AND_RAIN:
      case WeatherConditionCode.THUNDERSTORM_AND_RAIN_HEAVY:
        return 'thunderstorm with rain';
      case WeatherConditionCode.THUNDERSTORM_LIGHT:
      case WeatherConditionCode.THUNDERSTORM:
      case WeatherConditionCode.THUNDERSTORM_HEAVY:
      case WeatherConditionCode.THUNDERSTORM_RAGGED:
        return 'thunderstorm';
      case WeatherConditionCode.THUNDERSTORM_AND_DRIZZLE_LIGHT:
      case WeatherConditionCode.THUNDERSTORM_AND_DRIZZLE:
      case WeatherConditionCode.THUNDERSTORM_AND_DRIZZLE_HEAVY:
        return 'thunderstorm with drizzle';

      // Drizzle
      case WeatherConditionCode.DRIZZLE_LIGHT:
        return 'light drizzle';
      case WeatherConditionCode.DRIZZLE:
        return 'drizzle';
      case WeatherConditionCode.DRIZZLE_HEAVY:
        return 'heavy drizzle';
      case WeatherConditionCode.DRIZZLE_LIGHT_AND_RAIN:
      case WeatherConditionCode.DRIZZLE_RAIN:
      case WeatherConditionCode.DRIZZLE_RAIN_HEAVY:
      case WeatherConditionCode.DRIZZLE_AND_RAIN_SHOWER:
      case WeatherConditionCode.DRIZZLE_AND_RAIN_SHOWER_HEAVY:
      case WeatherConditionCode.DRIZZLE_SHOWER:
        return 'drizzle and rain';

      // Rain
      case WeatherConditionCode.RAIN_LIGHT:
        return 'light rain';
      case WeatherConditionCode.RAIN:
        return 'rain';
      case WeatherConditionCode.RAIN_HEAVY:
      case WeatherConditionCode.RAIN_VERY_HEAVY:
      case WeatherConditionCode.RAIN_EXTREME:
        return 'heavy rain';
      case WeatherConditionCode.RAIN_FREEZING:
        return 'freezing rain';
      case WeatherConditionCode.RAIN_SHOWER_LIGHT:
        return 'light rain shower';
      case WeatherConditionCode.RAIN_SHOWER:
        return 'rain shower';
      case WeatherConditionCode.RAIN_SHOWER_HEAVY:
      case WeatherConditionCode.RAIN_SHOWER_RAGGED:
        return 'heavy rain shower';

      // Snow
      case WeatherConditionCode.SNOW_LIGHT:
        return 'light snow';
      case WeatherConditionCode.SNOW:
        return 'show'
      case WeatherConditionCode.SNOW_HEAVY:
        return 'heavy snow'
      case WeatherConditionCode.SNOW_SLEET:
      case WeatherConditionCode.SNOW_SLEET_SHOWER:
        return 'sleet';
      case WeatherConditionCode.SNOW_AND_RAIN_LIGHT:
      case WeatherConditionCode.SNOW_AND_RAIN:
        return 'snow and rain';
      case WeatherConditionCode.SNOW_SHOWER_LIGHT:
        return 'light snow shower'
      case WeatherConditionCode.SNOW_SHOWER:
        return 'snow shower';
      case WeatherConditionCode.SNOW_SHOWER_HEAVY:
        return 'heavy snow shower';

      // Atmosphere
      case WeatherConditionCode.ATMOSPHERE_MIST:
        return 'mist';
      case WeatherConditionCode.ATMOSPHERE_SMOKE:
        return 'smoke';
      case WeatherConditionCode.ATMOSPHERE_HAZE:
        return 'haze';
      case WeatherConditionCode.ATMOSPHERE_SAND_AND_DUST_WHIRLS:
        return 'sand and dust whirls';
      case WeatherConditionCode.ATMOSPHERE_FOG:
        return 'fog';
      case WeatherConditionCode.ATMOSPHERE_SAND:
        return 'sand';
      case WeatherConditionCode.ATMOSPHERE_DUST:
        return 'dust';
      case WeatherConditionCode.ATMOSPHERE_VOLCANIC_ASH:
        return 'volcanic ash';
      case WeatherConditionCode.ATMOSPHERE_SQUALLS:
        return 'squalls';
      case WeatherConditionCode.ATMOSPHERE_TORNADO:
        return 'tornado';

      // Clear
      case WeatherConditionCode.CLEAR:
        return 'clear';

      // Clouds
      case WeatherConditionCode.CLOUDS_FEW:
      case WeatherConditionCode.CLOUDS_SCATTEERED:
      case WeatherConditionCode.CLOUDS_BROKEN:
        return 'cloudy';
      case WeatherConditionCode.CLOUDS_OVERCAST:
        return 'overcast';

      // Extreme
      case WeatherConditionCode.EXTREME_TORNADO:
        return 'tornado';
      case WeatherConditionCode.EXTREME_TROPICAL_STORM:
        return 'tropical storm';
      case WeatherConditionCode.EXTREME_HURICANE:
        return 'huricane';
      case WeatherConditionCode.EXTREME_COLD:
        return 'extreme cold';
      case WeatherConditionCode.EXTREME_HOT:
        return 'extreme hot';
      case WeatherConditionCode.EXTREME_WINDY:
        return 'windy';
      case WeatherConditionCode.EXTREME_HAIL:
        return 'hail';

      // Additional
      case WeatherConditionCode.WIND_CALM:
        return 'calm wind';
      case WeatherConditionCode.WIND_BREEZE_LIGHT:
      case WeatherConditionCode.WIND_BREEZE_GENTLE:
        return 'light breeze';
      case WeatherConditionCode.WIND_BREEZE_MODERATE:
      case WeatherConditionCode.WIND_BREEZE_FRESH:
        return 'moderate breeze';
      case WeatherConditionCode.WIND_BREEZE_STRONG:
        return 'strong breeze';
      case WeatherConditionCode.WIND_GALE_NEAR:
        return 'high wind';
      case WeatherConditionCode.WIND_GALE:
        return 'gale';
      case WeatherConditionCode.WIND_GALE_SEVERE:
        return 'severe gale';
      case WeatherConditionCode.WIND_STORM:
        return 'storm';
      case WeatherConditionCode.WIND_STORM_VIOLENT:
        return 'violent storm';
      case WeatherConditionCode.WIND_HURRICANE:
        return 'huricane';
    }
  }
}
