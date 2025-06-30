// src/components/BottomNav.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaTrophy,      // 🏆 NEW: Leaderboard icon
  FaStar,
  FaPlusCircle,
  FaUser,
} from 'react-icons/fa';


export default function BottomNav() {
  const navItems = [
    { to: '/',             icon: <FaHome />,       label: 'Home',      exact: true },
    { to: '/leaderboard',  icon: <FaTrophy />,     label: 'Rank' },    // 🆕
    { to: '/favorites',    icon: <FaStar />,       label: 'Starred' },
    { to: '/create',       icon: <FaPlusCircle />, label: 'Create' },
    { to: '/profile',      icon: <FaUser />,       label: 'Profile' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(({ to, icon, label, exact }) => (
        <NavLink
          key={to}
          to={to}
          end={exact}                         // ensures Home only matches exact "/"
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
