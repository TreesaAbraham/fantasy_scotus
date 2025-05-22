// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './scotus.css';  // ensure your global styles include navbar/dropdown rules

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Welcome button */}
      <Link to="/" className="nav-item home-btn">
        Welcome
      </Link>

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
