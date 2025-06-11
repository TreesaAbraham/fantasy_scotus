// src/components/GreetingHeader.js
import React from 'react';
import { colors, font, space } from '../theme';
import '../scotus.css';

/**
 * Props:
 *  ─ username   string  (required)
 *  ─ avatarUrl  string  (optional)
 */
export default function GreetingHeader({ username, avatarUrl }) {
  // fallback initials
  const initials = username
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <header
      style={{
        display:      'flex',
        alignItems:   'center',
        gap:          space.md,
        marginBottom: space.lg,
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width:          '48px',
          height:         '48px',
          borderRadius:   '50%',
          background:     colors.lavender300,
          color:          colors.white,
          fontSize:       font.lg,
          fontWeight:     700,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          overflow:       'hidden',
        }}
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          initials
        )}
      </div>

      {/* Greeting text */}
      <div>
        <p style={{ fontSize: font.sm, margin: 0, color: colors.lavender300 }}>
          Welcome back,
        </p>
        <h2 style={{ fontSize: font.xl, margin: 0, lineHeight: 1.1 }}>
          {username}
        </h2>
      </div>
    </header>
  );
}
