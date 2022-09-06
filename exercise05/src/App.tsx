import React from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country';

const DUMMY_COUNTRIES = [
  {
    name: "Finland",
    capital: "Helsinki"
  },
  {
    name: "England",
    capital: "London"
  }
]

export interface countryInteface {
  name: string, 
  capital: string,
}

function App() {
  return (
    <div >
      <h1>Countries app exercise 5</h1>
      {
        DUMMY_COUNTRIES.map((country:countryInteface) => (
          <Country country={ country}  />
        ))
      }
    </div>
  );
}

export default App;
