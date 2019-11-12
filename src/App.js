import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import CharacterCard from './components/CharacterCard';
import SearchForm from './components/SearchForm';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component ={WelcomePage} />
      <Route exact path='/characters' component={CharacterList} />
      <Route path='/characters/:id' render ={(props) => <CharacterCard {...props} />} />
    </main>
  );
}
