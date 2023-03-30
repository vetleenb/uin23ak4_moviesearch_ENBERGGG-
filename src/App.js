import React, { useState } from 'react'; 
import './App.css';
import MovieCard from './Components/MovieCard';
import SearchhResults  from './Components/SearchhResults';
//Søkebar fungerte med filtrering før jeg innførte API, som gjør at den nå ikke fungerer som den skal. Måtte endre store deler av koden grunnet dette og resultatet ble da ikke optimalt.


function App () {
  const [searchTerm, setSearchTerm] = useState([]);

  return (

<div style={{ backgroundColor: 'antiquwhite' }}>

  <h1>Topp James Bond Movies</h1>
  <MovieCard setSearchTerm={setSearchTerm} />
  <SearchhResults searchTerm={searchTerm} />
  <h3>Oblig 4 | Vetle Enberg | UIN</h3>
  
  </div>
  );
}

export default App;

