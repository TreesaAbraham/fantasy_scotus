// src/AboutFantasy.js
import React from 'react';
import Navbar from './Navbar';

export default function AboutFantasy() {
  return (
    <>
      {/* Reusable navigation bar */}
      <Navbar />

      <div className="about-fantasy">
        <h1>About FantasySCOTUS</h1>

        <p>
          FantasySCOTUS is the leading Supreme Court Fantasy League. Thousands of attorneys, law students, and other avid Supreme Court followers make predictions about cases before the Supreme Court. Participation is free.
        </p>

        <p>
          Founded in 2009 by Professor Josh Blackman (South Texas College of Law), in its first five seasons more than 25,000 lawyers, academics, law students, and members of the public have participated in the tournament.
        </p>

        <p>
          Featured in New York Times, CNN.com, WSJ Law Blog, VOX, ABA Journal Magazine, Reason Magazine, Freakonomics Blog, Yahoo News, and many other leading publications.
        </p>

        <blockquote>
          <p>The more the public knows about the court, the better.</p>
          <footer>—Justice Breyer on FantasySCOTUS.</footer>
        </blockquote>
      </div>
    </>
  );
}
