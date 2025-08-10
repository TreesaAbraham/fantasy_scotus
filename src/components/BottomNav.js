import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTrophy,      // Leaderboard
  FaChartBar,    // Court
  FaLightbulb,   // Predictions
  FaStar,        // Favorites
  FaPlusCircle,  // Create
  FaUser,        // Profile
  FaInfoCircle,  // About
} from 'react-icons/fa';
import '../scotus.css';

export default function Navbar() {
  const items = [
    { to: '/leaderboard',         label: 'Leaderboard', icon: <FaTrophy /> },
    { to: '/court',               label: 'Court',       icon: <FaChartBar /> },
    { to: '/predictions',         label: 'Predict',     icon: <FaLightbulb /> },
    { to: '/favorites',           label: 'Favorites',   icon: <FaStar /> },
    { to: '/create',              label: 'Create',      icon: <FaPlusCircle /> },
    { to: '/profile',             label: 'Profile',     icon: <FaUser /> },
    { to: '/about-fantasy-scotus',label: 'About',       icon: <FaInfoCircle /> },
  ];

  return (
    <nav className="fs-nav" role="navigation" aria-label="Primary">
      <div className="fs-nav__inner">
        {items.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              'fs-nav__link' + (isActive ? ' fs-nav__link--active' : '')
            }
            aria-label={label}
          >
            <span className="fs-nav__icon">{icon}</span>
            <span className="fs-nav__label">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
