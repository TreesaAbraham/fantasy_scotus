import React from 'react';
import '../scotus.css';

export default function PointsBadge({ points, loading = false, onClick }) {
  return (
    <button
      type="button"
      className="points-badge"
      onClick={onClick}
      disabled={loading}
    >
      <span>Today’s Points:</span>
      {loading ? <span style={{ width: 18 }}>…</span> : <strong>{points}</strong>}
    </button>
  );
}
