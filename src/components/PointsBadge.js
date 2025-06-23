// src/components/PointsBadge.js
import React from 'react';
import { colors, space, font } from '../theme';
import '../scotus.css';

/**
 * Small pill-style badge:  “Today’s Points: 42”
 *
 * Props
 *  ─ points   number  | required
 *  ─ loading  boolean | optional – show animated dots
 *  ─ onClick  fn      | optional – tap to open points history, etc.
 */
export default function PointsBadge({ points, loading = false, onClick }) {
  return (
    <button
      type="button"
      className="points-badge"
      onClick={onClick}
      disabled={loading}
      style={{
        display:        'inline-flex',
        alignItems:     'center',
        gap:            space.xs,
        padding:        `${space.xs} ${space.md}`,
        borderRadius:   '9999px',
        background:     colors.royalPurple,
        color:          colors.white,
        border:         'none',
        fontSize:       font.sm,
        cursor:         loading ? 'default' : 'pointer',
      }}
    >
      <span>Today’s Points:</span>
      {loading ? (
        <span className="dot-dot-dot" style={{ width: 18 }}>…</span>
      ) : (
        <strong>{points}</strong>
      )}
    </button>
  );
}
