// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../scotus.css';  // global styles already included, but fine to keep here

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Home button */}
      <Link to="/" className="nav-item home-btn">
        Home
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

      {/* Court dropdown */}
      <div className="nav-item dropdown">
        <button className="dropbtn">Court</button>
        <div className="dropdown-content">
          <Link to="/court">Dashboard</Link>     {/* <-- new link */}
          <Link to="/cases">Cases</Link>
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
