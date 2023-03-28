import React, { useState } from 'react';

function SearchBar() {
    
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
        <input type="text" placeholder="Søk..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

</div>
    );
}

export default SearchBar;