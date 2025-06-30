// src/components/BottomNav.js
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaStar, FaGavel, FaPlus, FaUser } from 'react-icons/fa';
import '../scotus.css';

/**
 * Persistent bottom navigation bar (mobile-style).
 * Tabs: Home · Star · Court* · Plus · Profile
 */
export default function BottomNav() {
  const { pathname } = useLocation();

  const tabs = [
    { id: 'home',     icon: FaHome, route: '/',         label: 'Home'     },
    { id: 'star',     icon: FaStar, route: '/favorites',label: 'Starred'  },
    { id: 'court',    icon: FaGavel,route: '/court',    label: 'Court'    },
    { id: 'create',   icon: FaPlus, route: '/create',   label: 'New'      },
    { id: 'profile',  icon: FaUser, route: '/profile',  label: 'Profile'  },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map(({ id, icon: Icon, route, label }) => (
        <NavLink
          key={id}
          to={route}
          className={({ isActive }) =>
            'tab' + (isActive || (id === 'home' && pathname === '/') ? ' active' : '')
          }
        >
          <Icon className="tab-icon" aria-hidden="true" />
          <span className="tab-label">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
