import React from "react";
import {Link} from 'react-router-dom';


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to='/characters'>Character List</Link>
      </header>
    </section>
  );
}
