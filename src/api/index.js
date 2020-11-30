import axios from 'axios';

let API_KEY = process.env.REACT_APP_API_KEY
console.log(process.env)

export const fetchCurrentWeatherData = async (city) => {

  let currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  try {
    const response = await axios.get(currentWeatherUrl)
    return response;

  } catch(error) {
    return error;
  }
}

export const fetchForecast = async (city) => {

  let currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  try {
    const response = await axios.get(currentWeatherUrl)

    console.log(response)
    return response;

  } catch(error) {
    return error;
  }
}
