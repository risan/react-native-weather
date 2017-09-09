export default class WeatherConditionCode {
  // Thunderstorm
  static get THUNDERSTORM_AND_RAIN_LIGHT() { return 200; }
  static get THUNDERSTORM_AND_RAIN() { return 201; }
  static get THUNDERSTORM_AND_RAIN_HEAVY() { return 202; }
  static get THUNDERSTORM_LIGHT() { return 210; }
  static get THUNDERSTORM() { return 211; }
  static get THUNDERSTORM_HEAVY() { return 210; }
  static get THUNDERSTORM_RAGGED() { return 221; }
  static get THUNDERSTORM_AND_DRIZZLE_LIGHT() { return 230; }
  static get THUNDERSTORM_AND_DRIZZLE() { return 231; }
  static get THUNDERSTORM_AND_DRIZZLE_HEAVY() { return 232; }

  // Drizzle
  static get DRIZZLE_LIGHT() { return 300; }
  static get DRIZZLE() { return 301; }
  static get DRIZZLE_HEAVY() { return 302; }
  static get DRIZZLE_LIGHT_AND_RAIN() { return 310; }
  static get DRIZZLE_RAIN() { return 311; }
  static get DRIZZLE_RAIN_HEAVY() { return 312; }
  static get DRIZZLE_AND_RAIN_SHOWER() { return 313; }
  static get DRIZZLE_AND_RAIN_SHOWER_HEAVY() { return 314; }
  static get DRIZZLE_SHOWER() { return 321; }

  // Rain
  static get RAIN_LIGHT() { return 500; }
  static get RAIN() { return 501; }
  static get RAIN_HEAVY() { return 502; }
  static get RAIN_VERY_HEAVY() { return 503; }
  static get RAIN_EXTREME() { return 504; }
  static get RAIN_FREEZING() { return 511; }
  static get RAIN_SHOWER_LIGHT() { return 520; }
  static get RAIN_SHOWER() { return 521; }
  static get RAIN_SHOWER_HEAVY() { return 522; }
  static get RAIN_SHOWER_RAGGED() { return 531; }

  // Snow
  static get SNOW_LIGHT() { return 600; }
  static get SNOW() { return 601; }
  static get SNOW_HEAVY() { return 602; }
  static get SNOW_SLEET() { return 611; }
  static get SNOW_SLEET_SHOWER() { return 612; }
  static get SNOW_AND_RAIN_LIGHT() { return 615; }
  static get SNOW_AND_RAIN() { return 616; }
  static get SNOW_SHOWER_LIGHT() { return 620; }
  static get SNOW_SHOWER() { return 621; }
  static get SNOW_SHOWER_HEAVY() { return 622; }

  // Atmosphere
  static get ATMOSPHERE_MIST() { return 701; }
  static get ATMOSPHERE_SMOKE() { return 711; }
  static get ATMOSPHERE_HAZE() { return 721; }
  static get ATMOSPHERE_SAND_AND_DUST_WHIRLS() { return 731; }
  static get ATMOSPHERE_FOG() { return 741; }
  static get ATMOSPHERE_SAND() { return 751; }
  static get ATMOSPHERE_DUST() { return 761; }
  static get ATMOSPHERE_VOLCANIC_ASH() { return 762; }
  static get ATMOSPHERE_SQUALLS() { return 771; }
  static get ATMOSPHERE_TORNADO() { return 781; }

  // Clear
  static get CLEAR() { return 800; }

  // Clouds
  static get CLOUDS_FEW() { return 801; }
  static get CLOUDS_SCATTEERED() { return 802; }
  static get CLOUDS_BROKEN() { return 803; }
  static get CLOUDS_OVERCAST() { return 804; }

  // Extreme
  static get EXTREME_TORNADO() { return 900; }
  static get EXTREME_TROPICAL_STORM() { return 901; }
  static get EXTREME_HURICANE() { return 902; }
  static get EXTREME_COLD() { return 903; }
  static get EXTREME_HOT() { return 904; }
  static get EXTREME_WINDY() { return 905; }
  static get EXTREME_HAIL() { return 906; }

  // Additional
  static get WIND_CALM() { return 951; }
  static get WIND_BREEZE_LIGHT() { return 952; }
  static get WIND_BREEZE_GENTLE() { return 953; }
  static get WIND_BREEZE_MODERATE() { return 954; }
  static get WIND_BREEZE_FRESH() { return 955; }
  static get WIND_BREEZE_STRONG() { return 900; }
  static get WIND_GALE_NEAR() { return 957; }
  static get WIND_GALE() { return 958; }
  static get WIND_GALE_SEVERE() { return 959; }
  static get WIND_STORM() { return 960; }
  static get WIND_STORM_VIOLENT() { return 961; }
  static get WIND_HURRICANE() { return 962; }
}
