import React, {useEffect, useState} from 'react';
import axios from 'axios'

const WeatherInfo = ({cityInfo}) => {

  if(!cityInfo) {
    return null;
  }

  const icon = cityInfo.weather[0].icon

  console.log(cityInfo)

  return (
    <div>
      <div>
        {cityInfo.name} {cityInfo.weather[0].description}
      </div>

      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='alt'/>
    </div>
  )
}

export default WeatherInfo