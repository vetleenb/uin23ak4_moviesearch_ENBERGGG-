import React from 'react';
import { MyList } from './MyList';
//import MovieCard from './MovieCard';
//import { useState } from 'react';

export const SearchhResults = ({searchTerm}) => {
return (

<div>
 {searchTerm.map((search, id) => {
  return <MyList search={search} key={id}/>;
 })
}
  </div>
);
};

  
  
     
 export default SearchhResults;