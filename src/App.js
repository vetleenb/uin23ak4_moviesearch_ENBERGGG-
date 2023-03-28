import React from 'react'; 
import './App.css';
import SearchResult from'./Components/SearchResults';
import SearchBar from './Components/SearchBar';


function App() {
  return (
    
    <div style={{backgroundColor: 'antiquewhite'}}>
      <h1>Top 10 James Bond Movies</h1>
      <SearchBar />
      <SearchResult />


       <h3>Oblig 4 | Vetle Enberg | UIN</h3>

    </div>
    
  );
}

export default App;
