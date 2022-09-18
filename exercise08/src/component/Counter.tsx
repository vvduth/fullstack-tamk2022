import React, { FC } from 'react'
import './Counter.css'

interface Props {
    num: number , 
    incre: any, 
    decre: any
}
const Counter:FC<Props> = ({num, incre, decre}) => {
  return (
    <div style={{display: 'flex'}}>
        <button className='button' onClick={incre}> + </button>
        <p className='text'>{num} </p>
        <button className='button' onClick={decre} > - </button>
    </div>
  )
}

export default Counter
