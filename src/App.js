import React, {useState, useEffect} from 'react';
import {fetchCurrentWeatherData} from './api/';
import CityInput from './components/CityInput/CityInput'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'

const App = () => {

  const [city, setCity] = useState('');
  const [finalCity, setFinalCity] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const weatherData = await fetchCurrentWeatherData(finalCity);
      setData(weatherData)
      return weatherData
    }

    fetchAPI()
  }, [finalCity])

  const handleCityChange = (newCity) => {
    setCity(newCity)
  }

  return(
    <div>
      <CityInput handleCityChange={handleCityChange} city={city} setFinalCity={setFinalCity}/>
      <WeatherInfo cityInfo={data.data}/>
    </div>
  )
}

export default App;