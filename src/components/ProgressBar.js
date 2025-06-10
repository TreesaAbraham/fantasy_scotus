// src/components/ProgressBar.js
import React from 'react';
import '../scotus.css';   // the bar gets its colours from the palette tokens

/**
 * A thin progress bar.
 *
 * Props
 *  ─ progress   number   0-100 (anything outside is clamped)
 *  ─ label?     string   optional text inside the bar (“70 %”)
 */
export default function ProgressBar({ progress, label }) {
  const pct = Math.min(100, Math.max(0, progress));

  return (
    <div className="progress-outer">
      <div
        className="progress-inner"
        style={{ width: `${pct}%` }}
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      >
        {label ?? `${pct}%`}
      </div>
    </div>
  );
}
