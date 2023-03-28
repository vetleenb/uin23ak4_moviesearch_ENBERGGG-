import React from 'react';
import MovieCard from './MovieCard';


function SearchResult() {
    return (
<ol style={{ listStyle: 'upper-roman' }}>
    {MovieCard.map((JB_movie) => (
<li key={JB_movie.name}>
    {JB_movie.name} ({JB_movie.release})
</li>
    ))}
</ol>
    );
}

export default SearchResult;