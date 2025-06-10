// src/components/BottomNav.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaStar, FaGavel, FaPlus, FaUser } from 'react-icons/fa';
import { colors } from '../theme';   // design-token palette
import '../scotus.css';              // keeps global styles

/**
 * Persistent bottom navigation bar (mobile-style).
 * Tabs: Home · Star · Court · Plus · Profile
 */
export default function BottomNav() {
  const tabs = [
    { id: 'home',    icon: FaHome, route: '/',          label: 'Home'     },
    { id: 'star',    icon: FaStar, route: '/favorites', label: 'Starred'  },
    { id: 'court',   icon: FaGavel,route: '/court',     label: 'Court'    },
    { id: 'create',  icon: FaPlus, route: '/create',    label: 'New'      },
    { id: 'profile', icon: FaUser, route: '/profile',   label: 'Profile'  },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map(({ id, icon: Icon, route, label }) => (
        <NavLink
          key={id}
          to={route}
          end={route === '/'}                        /* exact match for Home */
          className={({ isActive }) =>
            'tab' + (isActive ? ' active' : '')
          }
        >
          {/* ── children-as-function lets us use isActive for the icon colour ── */}
          {({ isActive }) => (
            <>
              <Icon
                className="tab-icon"
                aria-hidden="true"
                color={isActive ? colors.royalPurple : colors.lavender300}
              />
              <span className="tab-label">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
