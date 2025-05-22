// src/Welcome.js
import React from 'react';

import './scotus.css';
import Navbar from './Navbar'; // Import the reusable Navbar component

function Welcome() {
  const title = 'Welcome to FANTASYSCOTUS';
  const description =
    'FantasySCOTUS is a fantasy league for the Supreme Court of the United States. In this league, you can draft justices and earn points based on their decisions. To get started, create an account and join a league. Once you are in a league, you can draft justices and manage your team. Good luck!';

  return (
    <>
    {/* Reusable navigation bar */}
          <Navbar />
     

      <div className="App">
        <div className="content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default Welcome;
