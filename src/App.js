import React, {useState, useEffect} from 'react';
import {fetchCurrentWeatherData} from './api/';
import CityInput from './components/CityInput/CityInput'

const App = () => {

  const [city, setCity] = useState('')
  const [finalCity, setFinalCity] = useState('')

  useEffect(() => {
    const fetchAPI = async () => {
      const weatherData = await fetchCurrentWeatherData(finalCity);
      console.log(weatherData)
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
      <WeatherInfo />
    </div>
  )
}

export default App;