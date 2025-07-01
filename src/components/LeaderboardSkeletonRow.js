import React from 'react';
import '../scotus.css';

export default function LeaderboardSkeletonRow() {
  return (
    <div className="lb-skeleton-row" data-testid="lb-skeleton">
      <span className="lb-skeleton-rank skeleton-box" />
      <span className="lb-skeleton-avatar skeleton-circle" />
      <span className="lb-skeleton-name skeleton-box" />
      <span className="lb-skeleton-points skeleton-box" />
    </div>
  );
}
