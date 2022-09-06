import React, { FC } from 'react'
import { foodItem } from '../data/dummyData'

interface propsInterface {
    dish: foodItem,
    onRemove: any
}
const MenuItem:FC<propsInterface> = ({dish, onRemove}: propsInterface) => {

    const onRemoveHandler = () => {
        console.log(dish.name)
        onRemove(dish)
    }
  return (
    <div>
      {dish.name} {dish.price}
        <br/>
        <button key={dish.name} onClick={onRemoveHandler}>Delete</button>

    </div>
  )
}

export default MenuItem
