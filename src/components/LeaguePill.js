import React from 'react';
import '../scotus.css';

export default function LeaguePill({ id, label, icon, active, onSelect }) {
  return (
    <button
      type="button"
      className={`league-pill${active ? ' active' : ''}`}
      onClick={() => onSelect?.(id)}
    >
      {icon && <span className="icon" aria-hidden="true">{icon}</span>}
      {label}
    </button>
  );
}
