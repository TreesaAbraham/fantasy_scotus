import React from 'react';
import '../scotus.css';

export default function CaseSkeletonRow() {
  return (
    <div className="skeleton-row">
      <div className="skeleton-chip" />
      <div className="skeleton-rect" style={{ flex: 1 }} />
      <div className="skeleton-rect" style={{ width: 40 }} />
    </div>
  );
}
