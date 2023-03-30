import React from 'react';
import { useState } from 'react';

export const MovieCard = ({setSearchTerm}) => {
    const [input, setInput] = useState("");

    function fetchData(value) {
        fetch("https://api.themoviedb.org/3/movie/550?api_key=5084a026c624f937a52cc5a4c3fc3df9").then((response) => response.json())
            .then((json) => {
                const searchTerm = json.filter((user) => {
                    return (value && user && user.title && user.title.toLowerCase().includes(value)
                    );
                });
                setSearchTerm(searchTerm);
            });
    }
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };


    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <input type="text" placeholder='Søk...' value={input} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
};


