import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTrophy,      // Home
  FaUsers,       // Users leaderboard
  FaUniversity,  // League leaderboard
  FaChartBar,    // Court
  FaLightbulb,   // Predictions
  FaStar,        // Favorites
  FaGavel,       // Cases
  FaUser,        // Profile
  FaInfoCircle,  // About
} from 'react-icons/fa';
import '../scotus.css';

export default function Navbar() {
  const items = [
    { to: '/',                    label: 'Home',     icon: <FaTrophy />,     end: true },
    { to: '/leaderboard/leagues', label: 'League LB',icon: <FaUniversity />, aria: 'League Leaderboard' },
    { to: '/leaderboard/users',   label: 'Users LB', icon: <FaUsers />,      aria: 'Users Leaderboard' },
    { to: '/court',               label: 'Court',    icon: <FaChartBar /> },
    { to: '/predictions',         label: 'Predict',  icon: <FaLightbulb /> },
    { to: '/favorites',           label: 'Favorites',icon: <FaStar /> },
    { to: '/cases',               label: 'Cases',    icon: <FaGavel /> },
    { to: '/profile',             label: 'Profile',  icon: <FaUser /> },
    { to: '/about-fantasy-scotus',label: 'About',    icon: <FaInfoCircle /> },
  ];

  return (
    <nav className="fs-nav" role="navigation" aria-label="Primary">
      <div className="fs-nav__inner">
        {items.map(({ to, label, icon, end, aria }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              'fs-nav__link' + (isActive ? ' fs-nav__link--active' : '')
            }
            aria-label={aria || label}
            title={aria || label}
          >
            <span className="fs-nav__icon">{icon}</span>
            <span className="fs-nav__label">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
