// src/pages/LeaderboardScreen.js
import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import SegmentedToggle from '../components/SegmentedToggle';
import LeaderboardRow from '../components/LeaderboardRow';
import LeaderboardSkeletonRow from '../components/LeaderboardSkeletonRow';
import EmptyState from '../components/EmptyState';
import { useLeaderboard } from '../hooks/useLeaderboard';
import { space } from '../theme';

/* ──────────────────────────────────────────────────────────────── */
// Segmented toggle config
const segments = [
  { id: 'overall', label: 'Leaderboard' },
  { id: 'league',  label: 'Leagues' },
];

/**
 * Leaderboard page (overall users vs leagues).
 * Handles loading skeletons, empty‑state, and error messaging.
 */
export default function LeaderboardScreen() {
  const [mode, setMode] = useState('overall');                // 'overall' | 'league'
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
      {/* Top nav */}
      <TopNav title="Leaderboard" showBack />

      {/* Toggle */}
      <div style={{ marginBottom: space.md }}>
        <SegmentedToggle
          segments={segments}
          selectedId={mode}
          onSelect={(id) => {
            setMode(id);
            // optional manual refetch, hook auto‑refetches on mode change
            // refetch();
          }}
        />
      </div>

      {/* Error */}
      {error && (
        <p style={{ color: 'red', textAlign: 'center' }}>
          {error.message}
        </p>
      )}

      {/* Loading skeleton rows */}
      {loading && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}>
              <LeaderboardSkeletonRow />
            </li>
          ))}
        </ul>
      )}

      {/* Empty state */}
      {!loading && rows.length === 0 && !error && (
        <EmptyState illustration="/img/no-data.svg">
          Nothing here yet—check back later!
        </EmptyState>
      )}

      {/* Populated list */}
      {!loading && rows.length > 0 && (
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
