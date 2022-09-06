import React, { FC, useState } from "react";
import { menuListTypes } from "../data/dummyData";

interface propsType   {
    data: menuListTypes,
    onAdd: any, 
}

const AddItem:FC<propsType> = ({data, onAdd}) => {
  const [dishName, setDishName] = useState<string>("");
  const [price, setPrice] = useState<number>(0) ;

  const onSubmitHandler = (e:any) => {
    e.preventDefault() ; 
    console.log(dishName, " and ", price ) ;
    setDishName("");
    setPrice(0) ;
    onAdd({name: dishName, price: price}) ; 
  }

  
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Dish name" value={dishName} onChange={(e)=> {setDishName(e.target.value)}} required />
        <input type="number" placeholder="Price" value={price} onChange={(e:any)=> {setPrice(e.target.value)}} required />
        <button type="submit">Add menu item</button>
      </form>
    </>
  );
};

export default AddItem;
