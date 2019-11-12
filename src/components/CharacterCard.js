import React, {useState, useEffect} from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';

export default function CharacterCard(props) {
  const [person, setPerson] = useState()
  useEffect(() => {
    const id = props.match.params.id;
    console.log(id)
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
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
    <Card>
        <CardImg src={person.image} />
        <CardBody>
          <CardTitle>{person.name}</CardTitle>
          <CardSubtitle>Species: {person.species}</CardSubtitle>
          <Button outline color="primary" href={person.url}>{person.url}</Button>
        </CardBody>
      </Card>
  )
}
}
