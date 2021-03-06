import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from './SearchForm';
import {Link} from 'react-router-dom';
import axios from "axios";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([])
  const [filterState, setFilterState] = useState([]);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response);
      setFilterState(response.data.results)
      setData(response.data.results)
      console.log(data);
})
    .catch(error => {
      console.error('Server Error', error);
    });
  }, []);

  const Filter = (input) => {
    setFilterState(data.filter((character =>  character.name.toLowerCase().includes(input.toLowerCase()))))
  }


  return (
    <div className="character-list">
      <SearchForm setFilterState={Filter} />
      {filterState.map(data => (
      <Link to={`/characters/${data.id}`}> <img src={data.image}></img> </Link>
      ))}
    </div>
  );
}
