import React, {useState, useEffect} from 'react';
import {fetchCurrentWeatherData, fetchForecast} from './api/';
import CityInput from './components/CityInput/CityInput'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'

const App = () => {

  const [city, setCity] = useState('');
  const [finalCity, setFinalCity] = useState('');
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    const fetchCurrentWeatherAPI = async () => {
      const weatherData = await fetchCurrentWeatherData(finalCity);
      setData(weatherData)
      return weatherData
    }

    const fetchCurrentForecastAPI = async () => {
      const forecastData = await fetchForecast(finalCity)
      console.log(forecastData)
      setForecast(forecastData);
      return forecastData
    }


    fetchCurrentWeatherAPI()
    fetchCurrentForecastAPI()
  }, [finalCity])

  const handleCityChange = (newCity) => {
    setCity(newCity)
  }

  return(
    <div>
      <CityInput handleCityChange={handleCityChange} city={city} setFinalCity={setFinalCity}/>
      <WeatherInfo cityInfo={data.data} forecast={forecast.data}/>
    </div>
  )
}

export default App;