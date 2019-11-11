import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function CharacterCard(props) {
  const [person, setPerson] = useState()
  useEffect(() => {
    const id = props.match.params.id;
    console.log(props);
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          console.log(response);
          setPerson(response.data)
          
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
console.log(person);
if (!person){
  return(
    <h1>Loading...</h1>
  )
}
else{
  return (
    <div>

  
    <img src={person.image}></img>
    </div>
  )
}
}
