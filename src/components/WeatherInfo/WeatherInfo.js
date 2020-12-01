import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Tabs, Tab, Sonnet} from 'react-bootstrap'

const kelvinToFarenheit = (tempKelvin) => {
  return (Math.round((tempKelvin - 273.15) * (9/5) + 32))
}

const kelvinToCelsius = (tempKelvin) => {
  return (Math.round(tempKelvin - 273.15))
}

const WeatherInfo = ({cityInfo, forecast}) => {

  if(!cityInfo || !forecast) {
    return null;
  }

  const icon = cityInfo.weather[0].icon

  console.log(cityInfo)

  return (
    <div>

      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='alt'/>

      <Tabs defaultActiveKey="current" id="uncontrolled-tab-example">
        <Tab eventKey="current" title="Current Weather">
        <div>
              {cityInfo.name} {cityInfo.weather[0].description}
            </div>
        </Tab>
        <Tab eventKey="forecast" title="Forecast">
          {forecast.list.map((day, i) => {
            if(i % 8 === 0) {
              return (
                <div>
                  <div>Farenheit: {kelvinToFarenheit(day.main.temp)}</div>
                  <div>Celsius: {kelvinToCelsius(day.main.temp)}</div>
                </div>
              )

            }
          })}
        </Tab>
      </Tabs>
    </div>
  )
}

export default WeatherInfo