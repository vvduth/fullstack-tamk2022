import React from 'react';
import logo from './logo.svg';
import './App.css';
import { thrillers,scifi, documentary } from './data/data';
import MoviesList from './component/MoviesList';
import { Movies } from './types/type';

export interface MoviesConvert {
  type: string , 
  movies: Movies
}

const trillersConvert: MoviesConvert = {type: "Thriller", movies: thrillers} 
const scifiConvert : MoviesConvert = {type: "Scifi", movies: scifi}
const documentaryConvert : MoviesConvert = {type: "Documentary", movies: documentary}

function App() {
  
  return (
    <>
      <h1>Movies</h1>
      <MoviesList thrillers= {trillersConvert} scifi={scifiConvert} documentary={documentaryConvert}/>
    </>
  );
}

export default App;
