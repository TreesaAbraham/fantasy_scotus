// src/components/BottomNav.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaTrophy,
  FaChartBar,
  FaStar,
  FaPlusCircle,
  FaUser,
  FaLightbulb,        // 💡 NEW: predictions icon
} from 'react-icons/fa';
import '../scotus.css'; // Import your styles

export default function BottomNav() {
  const navItems = [
    { to: '/',            icon: <FaHome />,       label: 'Home',   exact: true },
    { to: '/leaderboard', icon: <FaTrophy />,     label: 'Rank' },
    { to: '/court',       icon: <FaChartBar />,   label: 'Court' },
    { to: '/predictions', icon: <FaLightbulb />,  label: 'Predict' }, // 🆕
    { to: '/favorites',   icon: <FaStar />,       label: 'Starred' },
    { to: '/create',      icon: <FaPlusCircle />, label: 'Create' },
    { to: '/profile',     icon: <FaUser />,       label: 'Profile' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(({ to, icon, label, exact }) => (
        <NavLink
          key={to}
          to={to}
          end={exact}
          className={({ isActive }) =>
            'bottom-nav__item' +
            (isActive ? ' bottom-nav__item--active' : '')
          }
        >
          {icon}
          <span className="bottom-nav__label">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
