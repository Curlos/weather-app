import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Tabs, Tab, Table} from 'react-bootstrap'
import { AreaChart, Area, ComposedChart, Tooltip, Legend, CartesianGrid, Bar, Line, XAxis, YAxis } from "recharts";


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

  console.log('FORECAST DATA OBJECT:')

  const data = forecast.list.map((day) => {
    return {timeDate: day.dt_txt, temp: kelvinToFarenheit(day.main.temp)}
  });
  

  return (
    <div>

      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='alt'/>

      <ComposedChart width={730} height={250} data={data}>
        <XAxis dataKey="timeDate" />
        <YAxis yAxisId={1} orientation="right" label={{ value: 'Rain mm', angle: -90 }} />
        <YAxis yAxisId={2} label={{ value: 'Temp (℉)', angle: -90}} />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line yAxisId={2} type="monotone" dataKey="temp" stroke="#ff0000" />
      </ComposedChart>

      <Tabs defaultActiveKey="current" id="uncontrolled-tab-example">
        <Tab eventKey="current" title="Current Weather">
        
          <div>
              <b>Location: </b>{cityInfo.name} <b>Temperature: </b> {kelvinToFarenheit(cityInfo.main.temp)} ℉ <b>Weather: </b> {cityInfo.weather[0].main} ({cityInfo.weather[0].description}) <img src={`http://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@2x.png`} alt='alt'/>
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
                      <b>Time: </b>{day.dt_txt}, <b>Temperature: </b> {kelvinToFarenheit(day.main.temp)} ℉ <b>Weather: </b> {day.weather[0].main} ({day.weather[0].description}) <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt='alt'/>
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