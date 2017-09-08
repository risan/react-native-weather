import env from '../../env';

export default class Weather {
  static async fetch() {
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&APPID=${env.OPEN_WEATHER_API_KEY}`);
      let responseJson = await response.json();

      if (response.status !== 200) {
        throw new Error(responseJson.message);
      }

      return responseJson.main.temp;
    } catch (error) {
      throw error;
    }
  }
}
