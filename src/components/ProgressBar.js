// src/components/ProgressBar.js
import React from 'react';
import { colors, space } from '../theme';   // ← tokens
import '../scotus.css';

/**
 * Thin progress bar.
 *
 * Props
 *  ─ progress   number   0-100 (clamped)
 *  ─ label?     string   optional inside-bar text (“70 %”)
 */
export default function ProgressBar({ progress, label }) {
  const pct = Math.min(100, Math.max(0, progress));

  return (
    <div
      className="progress-outer"
      style={{ height: space.sm }}              /* spacing token */
    >
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        className="progress-inner"
        style={{
          width:       `${pct}%`,
          background:  colors.progressFill,     /* colour token */
          color:       colors.white,
          paddingRight: space.xs,
        }}
      >
        {label ?? `${pct}%`}
      </div>
    </div>
  );
}
