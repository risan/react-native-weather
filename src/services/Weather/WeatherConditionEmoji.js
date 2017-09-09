import { WeatherConditionCode } from '../OpenWeatherMap';

export default class WeatherConditionEmoji {
  static getForCode(code, isAtNight = false) {
    switch (code) {
      // Thunderstorm
      case WeatherConditionCode.THUNDERSTORM_AND_RAIN_LIGHT:
      case WeatherConditionCode.THUNDERSTORM_AND_RAIN:
      case WeatherConditionCode.THUNDERSTORM_AND_RAIN_HEAVY:
        return '⛈';
      case WeatherConditionCode.THUNDERSTORM_LIGHT:
      case WeatherConditionCode.THUNDERSTORM:
      case WeatherConditionCode.THUNDERSTORM_HEAVY:
      case WeatherConditionCode.THUNDERSTORM_RAGGED:
        return '🌩';
      case WeatherConditionCode.THUNDERSTORM_AND_DRIZZLE_LIGHT:
      case WeatherConditionCode.THUNDERSTORM_AND_DRIZZLE:
      case WeatherConditionCode.THUNDERSTORM_AND_DRIZZLE_HEAVY:
        return '⛈';

      // Drizzle
      case WeatherConditionCode.DRIZZLE_LIGHT:
      case WeatherConditionCode.DRIZZLE:
      case WeatherConditionCode.DRIZZLE_HEAVY:
      case WeatherConditionCode.DRIZZLE_LIGHT_AND_RAIN:
      case WeatherConditionCode.DRIZZLE_RAIN:
      case WeatherConditionCode.DRIZZLE_RAIN_HEAVY:
      case WeatherConditionCode.DRIZZLE_AND_RAIN_SHOWER:
      case WeatherConditionCode.DRIZZLE_AND_RAIN_SHOWER_HEAVY:
      case WeatherConditionCode.DRIZZLE_SHOWER:
        return isAtNight ? '🌧' : '🌦';

      // Rain
      case WeatherConditionCode.RAIN_LIGHT:
      case WeatherConditionCode.RAIN:
      case WeatherConditionCode.RAIN_HEAVY:
      case WeatherConditionCode.RAIN_VERY_HEAVY:
      case WeatherConditionCode.RAIN_EXTREME:
      case WeatherConditionCode.RAIN_FREEZING:
      case WeatherConditionCode.RAIN_SHOWER_LIGHT:
      case WeatherConditionCode.RAIN_SHOWER:
      case WeatherConditionCode.RAIN_SHOWER_HEAVY:
      case WeatherConditionCode.RAIN_SHOWER_RAGGED:
        return isAtNight ? '🌧' : '🌦';

      // Snow
      case WeatherConditionCode.SNOW_LIGHT:
      case WeatherConditionCode.SNOW:
      case WeatherConditionCode.SNOW_HEAVY:
      case WeatherConditionCode.SNOW_SLEET:
      case WeatherConditionCode.SNOW_SLEET_SHOWER:
      case WeatherConditionCode.SNOW_AND_RAIN_LIGHT:
      case WeatherConditionCode.SNOW_AND_RAIN:
      case WeatherConditionCode.SNOW_SHOWER_LIGHT:
      case WeatherConditionCode.SNOW_SHOWER:
      case WeatherConditionCode.SNOW_SHOWER_HEAVY:
        return '🌨';

      // Atmosphere
      case WeatherConditionCode.ATMOSPHERE_MIST:
        return '🌁';
      case WeatherConditionCode.ATMOSPHERE_SMOKE:
        return '💨'
      case WeatherConditionCode.ATMOSPHERE_HAZE:
        return '🌁';
      case WeatherConditionCode.ATMOSPHERE_SAND_AND_DUST_WHIRLS:
        return '🌀';
      case WeatherConditionCode.ATMOSPHERE_FOG:
        return '🌁';
      case WeatherConditionCode.ATMOSPHERE_SAND:
      case WeatherConditionCode.ATMOSPHERE_DUST:
        return '😷';
      case WeatherConditionCode.ATMOSPHERE_VOLCANIC_ASH:
        return '🌋';
      case WeatherConditionCode.ATMOSPHERE_SQUALLS:
        return '💨';
      case WeatherConditionCode.ATMOSPHERE_TORNADO:
        return '🌪';

      // Clear
      case WeatherConditionCode.CLEAR:
        return isAtNight ? '🌜' : '☀️';

      // Clouds
      case WeatherConditionCode.CLOUDS_FEW:
        return isAtNight ? '☁️' : '🌤';
      case WeatherConditionCode.CLOUDS_SCATTEERED:
      case WeatherConditionCode.CLOUDS_BROKEN:
      case WeatherConditionCode.CLOUDS_OVERCAST:
        return isAtNight ? '☁️' : '🌥';

      // Extreme
      case WeatherConditionCode.EXTREME_TORNADO:
        return '🌪';
      case WeatherConditionCode.EXTREME_TROPICAL_STORM:
      case WeatherConditionCode.EXTREME_HURICANE:
        return '⚠️';
      case WeatherConditionCode.EXTREME_COLD:
        return '❄️';
      case WeatherConditionCode.EXTREME_HOT:
        return '🔥';
      case WeatherConditionCode.EXTREME_WINDY:
      case WeatherConditionCode.EXTREME_HAIL:
        return '🌬';

      // Additional
      case WeatherConditionCode.WIND_CALM:
      case WeatherConditionCode.WIND_BREEZE_LIGHT:
      case WeatherConditionCode.WIND_BREEZE_GENTLE:
      case WeatherConditionCode.WIND_BREEZE_MODERATE:
      case WeatherConditionCode.WIND_BREEZE_FRESH:
        return '🎏';
      case WeatherConditionCode.WIND_BREEZE_STRONG:
      case WeatherConditionCode.WIND_GALE_NEAR:
      case WeatherConditionCode.WIND_GALE:
        return '🌬';
      case WeatherConditionCode.WIND_GALE_SEVERE:
      case WeatherConditionCode.WIND_STORM:
      case WeatherConditionCode.WIND_STORM_VIOLENT:
      case WeatherConditionCode.WIND_HURRICANE:
        return '⚠️';
    }
  }
}
