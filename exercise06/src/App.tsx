import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuList from './components/MenuList';
import AddItem from './components/AddItem';
import { DUMMY_DATA, foodItem, menuListTypes } from './data/dummyData';

function App() {
  const [list, setList] = useState<menuListTypes>(DUMMY_DATA) ;
  const onSubmit = (dish: foodItem) => {
    setList((old: menuListTypes) => [...old, dish])
    console.log(list) ;
  }

  const onRemove = ({name}: foodItem) => {
    setList(list.filter((dish: foodItem) => dish.name !== name))
  }
  return (
    <>
      <h1>My restaurant</h1>
      <MenuList data={list} onRemove= {onRemove}/>
      <AddItem data={list} onAdd={onSubmit}/>
    </>
  );
}

export default App;
