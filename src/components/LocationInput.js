import React, {useEffect, useState} from 'react';
import {fetchCurrentWeatherData} from '../api'
import { Button, Input } from '@material-ui/core';

const LocationInput = ({handleLocationChange, location, setFinalLocation}) => {
  return (
    <div>
      <Input onChange={(e) => handleLocationChange(e.target.value)}></Input>
      <Button onClick={() => setFinalLocation(location)}>Search</Button>
    </div>
  )
}

export default LocationInput