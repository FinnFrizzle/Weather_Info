import axios from 'axios'

const API_KEY = '3079132a362e2ee9f2bd4bf784745d33';
const Root_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city, countryCode) {
  const url = `${Root_URL}&q=${city},${countryCode}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
