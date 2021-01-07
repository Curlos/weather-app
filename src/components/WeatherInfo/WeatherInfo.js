import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Tabs, Tab, Table} from 'react-bootstrap'

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

  /*

  <div>Farenheit: {kelvinToFarenheit(day.main.temp)}</div>
                  <div>Celsius: {kelvinToCelsius(day.main.temp)}</div>
                  */

  const icon = cityInfo.weather[0].icon

  console.log('City Info: ')
  console.log(cityInfo)
  console.log('Forecast: ')
  console.log(forecast)

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
          <Table striped bordered hover>
          <ul>
            {forecast.list.map((day, i) => {
                console.log('day')
                console.log(day)
                return (
                    <li key={i}>
                      {day.dt_txt}, <b>Temperature: </b> {kelvinToFarenheit(day.main.temp)} ℉ <b>Weather: </b> {day.weather[0].main} ({day.weather[0].description}) <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt='alt'/>
                    </li>
                )
            })}
          </ul>
          </Table>
        </Tab>
      </Tabs>
    </div>
  )
}

export default WeatherInfo