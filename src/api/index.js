import axios from 'axios';

let API_KEY = process.env.REACT_APP_API_KEY
console.log(process.env)

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

async function success(pos) {
  let coords = pos.coords;
  let lat = coords.latitude;
  let lng = coords.longitude;

  return {lat, lng};
}

async function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

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

  let currentWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

  try {
    const response = await axios.get(currentWeatherUrl)

    console.log(response)
    return response;

  } catch(error) {
    return error;
  }
}

export const fetchCurrentLocation = async () => {
  if (navigator.geolocation) {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        if (result.state === "granted") {
          console.log(result.state);
          //If granted then you can directly call your function here
          navigator.geolocation.getCurrentPosition(success);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "denied") {
          //If denied then you have to show instructions to enable location
        }
        result.onchange = function () {
          console.log(result.state);
        };
      });
  } else {
    alert("Sorry Not available!");
  }
}
