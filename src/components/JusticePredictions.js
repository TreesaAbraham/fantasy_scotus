// src/components/JusticePredictions.js
import React, { useState, useEffect } from 'react';
import { JUSTICES } from '../constants/justices';
import JusticeRow from './JusticeRow';
import '../scotus.css';

/**
 * JusticePredictions
 * - Controlled/Uncontrolled hybrid:
 *   - If `value` provided, uses it; else manages internal state.
 * - Calls onChange(justiceId, vote, nextState) on every change.
 */
export default function JusticePredictions({ value, onChange }) {
  const [selected, setSelected] = useState(() => value || {});
  useEffect(() => {
    if (value) setSelected(value);
  }, [value]);

  const handleChange = (justiceId, vote) => {
    const next = { ...selected, [justiceId]: vote };
    setSelected(next);
    onChange?.(justiceId, vote, next);
  };

  return (
    <div className="jlist">
      {JUSTICES.map(j => (
        <JusticeRow
          key={j.id}
          justice={j}
          value={selected[j.id] ?? null}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}
