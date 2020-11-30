import React, {useEffect, useState} from 'react';
import {fetchCurrentWeatherData} from '../../api'
import { Button, Input } from '@material-ui/core';

const CityInput = ({handleCityChange, city, setFinalCity}) => {

 

  return (
    <div>
      <Input onChange={(e) => handleCityChange(e.target.value)}></Input>
      <Button onClick={() => setFinalCity(city)}>Search</Button>
    </div>
  )
}

export default CityInput