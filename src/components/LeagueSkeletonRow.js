import React from 'react';
import '../scotus.css';   // re-uses the same skeleton styles

export default function LeagueSkeletonRow() {
  return (
    <div className="lg-skeleton-row" data-testid="lg-skeleton">
      <span className="lg-skeleton-rank   skeleton-box" />
      <span className="lg-skeleton-avatar skeleton-circle" />
      <span className="lg-skeleton-name   skeleton-box" />
      <span className="lg-skeleton-points skeleton-box" />
    </div>
  );
}
