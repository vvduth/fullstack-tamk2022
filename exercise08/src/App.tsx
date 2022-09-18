import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
function App() {

  const [num, setNum] = useState<number>(0) ;
  const increHandler = () => {
    setNum(num+1) ;
  }
  const decreHandler = () => {
    setNum(num-1) ;
  }
  return (
    <>
      <Counter num={num} incre={increHandler}  decre={decreHandler}/>
      <Counter num={num} incre={increHandler} decre={decreHandler}/>
    </>
  );
}

export default App;
