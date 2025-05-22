// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './scotus.css';  // your global stylesheet with navbar/dropdown styles

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Welcome button */}
      <Link to="/" className="nav-item home-btn">
        Welcome
      </Link>

      {/* League dropdown */}
      <div className="nav-item dropdown">
        <Link to="/leagues" className="dropbtn">
          League
        </Link>
        <div className="dropdown-content">
          <Link to="/leagues">League List</Link>
        </div>
      </div>

      {/* Info dropdown */}
      <div className="nav-item dropdown">
        <button className="dropbtn">Info</button>
        <div className="dropdown-content">
          <Link to="/getting-started">Getting Started</Link>
          <Link to="/about-fantasy-scotus">About FantasySCOTUS</Link>
          <Link to="/official-rules">Rules</Link>
        </div>
      </div>
    </nav>
  );
}
