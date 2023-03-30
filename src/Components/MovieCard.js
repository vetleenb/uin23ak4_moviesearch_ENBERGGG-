import React from 'react';
import { useState } from 'react';

export const MovieCard = ({setSearchTerm}) => {
    const [input, setInput] = useState("");

    function MyData(value) {
        fetch("https://api.themoviedb.org/3/movie/550?api_key=5084a026c624f937a52cc5a4c3fc3df9").then((response) => response.json())
            .then((json) => {
                const searchTerm = json.filter((movie) => {
                    return (value && movie && movie.title && movie.title.toLowerCase().includes(value)
                    );
                });
                setSearchTerm(searchTerm);
            });
    }
    const Change = (value) => {
        setInput(value);
        MyData(value);
    };


    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <input type="text" placeholder='Søk...' value={input} onChange={(e) => Change(e.target.value)}/>
        </div>
    )
};


