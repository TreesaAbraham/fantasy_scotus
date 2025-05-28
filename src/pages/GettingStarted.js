// src/GettingStarted.js
import React from 'react';

import { Link } from 'react-router-dom';

export default function GettingStarted() {
  return (
    <>


      <div className="getting-started">
        <h1>Getting Started with FantasySCOTUS</h1>
        <p>
          Make sure to check for your confirmation email; it could be in your spam folder.  
          You’ll need to click the link to confirm your account’s email address.
        </p>
        <p>
          Once you’ve confirmed your email address, go predict a case!  
          See the case list to the right or view the full case list page{' '}
          <Link to="/cases">here</Link>.
        </p>
        <p>
          Be social! Join or create a league to compete against your friends and track your own leaderboard.
        </p>
      </div>
    </>
  );
}
