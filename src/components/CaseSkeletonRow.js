import React from 'react';
import '../scotus.css';           // your global styles

export default function CaseSkeletonRow() {
  return (
    <div className="case-skeleton-row">
      <div className="sk-chip" />
      <div className="sk-thumb" />
      <div className="sk-title" />
      <div className="sk-points" />
    </div>
  );
}
