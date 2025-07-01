// src/pages/LeaderboardScreen.js
import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import SegmentedToggle from '../components/SegmentedToggle';
import LeaderboardRow from '../components/LeaderboardRow';
import { useLeaderboard } from '../hooks/useLeaderboard';
import { space } from '../theme';
import '../scotus.css';

// Toggle options
const segments = [
  { id: 'overall', label: 'Leaderboard' },
  { id: 'league',  label: 'Leagues' },
];

export default function LeaderboardScreen() {
  const [mode, setMode] = useState('overall');           // overall | league
  const { rows, loading, error, refetch } = useLeaderboard(mode);

  return (
    <main
      className="page"
      style={{
        padding: space.md,
        minHeight: 'calc(100vh - 60px - var(--space-md))',
        overflowY: 'auto',
      }}
    >
      {/* Sticky header */}
      <TopNav title="Leaderboard" showBack />

      {/* Segmented toggle */}
      <div style={{ marginBottom: space.md }}>
        <SegmentedToggle
          segments={segments}
          selectedId={mode}
          onSelect={setMode}
        />
      </div>

      {/* States */}
      {loading && <p style={{ textAlign: 'center' }}>Loading…</p>}
      {error && (
        <p style={{ color: 'red', textAlign: 'center' }}>
          {error.message}{' '}
          <button onClick={refetch} style={{ marginLeft: 8 }}>
            Retry
          </button>
        </p>
      )}
      {!loading && !error && rows.length === 0 && (
        <p style={{ textAlign: 'center' }}>No data yet.</p>
      )}

      {/* Leaderboard list */}
      {!loading && !error && rows.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {rows.map((r) => (
            <li key={`${mode}-${r.rank}`}>
              <LeaderboardRow {...r} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
