import { countryInteface } from '../App'
import React, { FC } from 'react'


interface propType  {
    country: countryInteface 
}
const Country:FC<propType> = ({country}: propType) => {
  return (
    <div>
      <ul>
        <li>Name: {country.name}</li>
        <li>Capital: {country.capital}</li>
      </ul>
    </div>
  )
}

export default Country
