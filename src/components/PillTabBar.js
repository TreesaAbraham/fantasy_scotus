// src/components/PillTabBar.js
import React, { useState } from 'react';
import { colors, space }   from '../theme';   // ← design tokens
import '../scotus.css';                      // keeps any generic globals

/**
 * Re-usable pill-style tab bar.
 *
 * Props
 *  ─ tabs        [{ id, label, icon? }]
 *  ─ onChange    fn(id)           called when a pill is clicked
 *  ─ defaultId   string (opt.)    which tab is active on mount
 */
export default function PillTabBar({ tabs, onChange, defaultId }) {
  const [selected, setSelected] = useState(defaultId ?? tabs[0]?.id);

  const handleClick = (id) => {
    setSelected(id);
    onChange?.(id);
  };

  return (
    <div
      className="pill-tabs"
      style={{
        display: 'flex',
        gap: space.sm,
        margin: `${space.sm} 0 ${space.md}`,
      }}
    >
      {tabs.map((t) => {
        const active = selected === t.id;

        return (
          <button
            key={t.id}
            type="button"
            onClick={() => handleClick(t.id)}
            style={{
              display:        'flex',
              alignItems:     'center',
              gap:            space.xs,
              padding:        `${space.xs} ${space.md}`,
              borderRadius:   '9999px',
              fontSize:       'var(--step--1)',  // 14 px
              border:         'none',
              cursor:         'pointer',
              background:     active ? colors.royalPurple : colors.lavender100,
              color:          active ? colors.white       : colors.royalPurple,
              transition:     'background 0.15s ease',
            }}
          >
            {t.icon && (
              <span
                className="icon"
                aria-hidden="true"
                style={{ fontSize: '0.9em' }}
              >
                {t.icon}
              </span>
            )}
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
