import React, {useState, useEffect} from 'react';
import {fetchCurrentWeatherData} from './api/';

console.log(process.env)

const App = () => {

  const [weather, setWeather] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const currentWeather = await fetchCurrentWeatherData('miami');
      setWeather(currentWeather)
    }

    fetchData()
  }, [setWeather])

  console.log(weather)
  return(
    <div>
      {JSON.stringify(weather)}
    </div>
  )
}

export default App;