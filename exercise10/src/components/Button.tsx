import React, { useContext } from 'react'
import { APIContext } from './APIContext'

const Button = () => {

    const {joke, setJoke, fetchRandomJoke} = useContext(APIContext) as any ; 
  return (
    <button onClick={fetchRandomJoke}>
      Get one random joke
    </button>
  )
}

export default Button
