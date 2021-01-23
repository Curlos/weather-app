import React, {useState, useEffect} from 'react';
import {fetchCurrentWeatherData, fetchForecast, fetchCurrentLocation} from './api/';
import LocationInput from './components/LocationInput'
import WeatherInfo from './components/WeatherInfo'

const App = () => {

  const [location, setLocation] = useState('');
  const [geoLocation, setGeoLocation] = useState({lat: 0, lng: 0});
  const [finalLocation, setFinalLocation] = useState('');
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState({});
  

  useEffect(() => {
    const fetchCurrentWeatherAPI = async () => {
      const weatherData = await fetchCurrentWeatherData(finalLocation);
      setData(weatherData)
      return weatherData
    }

    const fetchCurrentForecastAPI = async () => {
      const forecastData = await fetchForecast(finalLocation)
      console.log(forecastData)
      setForecast(forecastData);
      return forecastData
    }

    const fetchCurrentLocationAPI = async () => {
      const locationData = await fetchCurrentLocation();
      setGeoLocation(locationData);
      console.log('h');
      console.log(locationData);
      console.log('h');
    }

    fetchCurrentWeatherAPI()
    fetchCurrentForecastAPI()
    fetchCurrentLocationAPI()
  }, [finalLocation])

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation)
  }

  console.log('geoLocation: ', geoLocation)

  return(
    <div>
      <LocationInput handleLocationChange={handleLocationChange} location={location} setFinalLocation={setFinalLocation}/>
      <WeatherInfo locationInfo={data.data} forecast={forecast.data}/>
      
      
    </div>
  )
}

export default App;