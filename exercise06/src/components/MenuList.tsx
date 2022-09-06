import React, { FC, useState } from 'react'
import MenuItem from './MenuItem'
import { foodItem, menuListTypes, DUMMY_DATA } from '../data/dummyData'

interface propsType   {
    data: menuListTypes,
    onRemove: any
}

const MenuList:FC<propsType> = ({data, onRemove}) => {


  return (
    <div>
      <ul>
        {data.map((dish: foodItem)=> (
            <li key={dish.name}>
                <MenuItem  dish={dish} onRemove={onRemove}/>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuList
