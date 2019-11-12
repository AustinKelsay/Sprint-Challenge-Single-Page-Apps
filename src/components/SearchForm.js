import React, { useState, useEffect } from "react";
import axios from 'axios';
import { __values } from "tslib";

export default function SearchForm(props) {
  const [query, setQuery] = useState("");

//   useEffect(() => {
//     axios
//     .get(`https://rickandmortyapi.com/api/character/`)
//     .then(response => {
//       const characters = response.data.results.filter(character =>
//         character.name.toLowerCase().includes(query.toLowerCase())
//         );

        
//   }, [query]);
// })

  
  const handleChange = (event) => {
    setQuery(event.target.value)
    props.setFilterState(query)
  };


  return (
    <div className="App">
      <form>
        <label>
          Search:
          <input type="text" value={query} onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
