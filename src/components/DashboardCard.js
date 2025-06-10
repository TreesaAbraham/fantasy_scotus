// src/components/DashboardCard.js
import React from 'react';
import ProgressBar from './ProgressBar';
import '../scotus.css';

/**
 * Generic card for the Court Dashboard.
 *
 * Props
 *  ─ title        string    main heading
 *  ─ copy         string    supporting text
 *  ─ illustration string    import/URL of an SVG/PNG displayed on the right
 *  ─ progress     number    0-100; if undefined the bar is hidden
 *  ─ onClick      fn        optional CTA
 */
export default function DashboardCard({
  title,
  copy,
  illustration,
  progress,
  onClick,
  variant
}) {
  return (
    <div
      className="card dashboard-card"
      role={onClick ? 'button' : undefined}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      style={{ background: `var(--card-${variant})` }}
    >
      <div className="dashboard-card__text">
        <h3>{title}</h3>
        <p>{copy}</p>

        {progress !== undefined && (
          <ProgressBar progress={progress} />
        )}
      </div>

      {illustration && (
        <img
          className="dashboard-card__illustration"
          src={illustration}
          alt=""
          aria-hidden="true"
        />
      )}
    </div>
  );
}
