// src/pages/LeaguesScreen.js
import React, { useState } from 'react';
import '../scotus.css';
import TopNav from '../components/TopNav';
import SegmentedToggle from '../components/SegmentedToggle';
import LeagueRow from '../components/LeagueRow';
import LeagueSkeletonRow from '../components/LeagueSkeletonRow';
import EmptyState from '../components/EmptyState';
import { useLeagues } from '../hooks/useLeagues';
import { space } from '../theme';

export default function LeaguesScreen() {
  const [isFav, setIsFav] = useState(false);
  const [mode, setMode] = useState('all'); // 'all' | 'law'

  const segments = [
    { id: 'all', label: 'All Leagues',     badge: 0 },
    { id: 'law', label: 'Law-School Only', badge: 0 },
  ];

  // ⬇️ SAFE DEFAULTS (no undefined .length)
  const result   = useLeagues(mode);
  const rows     = Array.isArray(result?.rows) ? result.rows : [];
  const loading  = result?.loading ?? true;
  const error    = result?.error ?? null;
  const list     = rows; // just a clearer name below

  return (
    <>
      <TopNav
        title="Leagues"
        showBack
        showFavourite
        favourite={isFav}
        onToggleFavourite={() => setIsFav(f => !f)}
      />

      <div style={{ padding: `0 ${space.md}` }}>
        <SegmentedToggle
          segments={segments}
          selectedId={mode}
          onSelect={id => setMode(id)}
        />
      </div>

      <main
        className="page"
        style={{
          padding: space.md,
          minHeight: 'calc(100vh - 60px - var(--space-md))',
          overflowY: 'auto',
        }}
      >
        {loading && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i}><LeagueSkeletonRow /></li>
            ))}
          </ul>
        )}

        {!!error && (
          <p style={{ color: 'red', textAlign: 'center' }}>
            {error.message || 'Failed to load leagues.'}
          </p>
        )}

        {!loading && !error && list.length === 0 && (
          <EmptyState illustration="/img/no-data.svg">
            Nothing here yet—check back later!
          </EmptyState>
        )}

        {!loading && !error && list.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {list.map(r => (
              <li key={r.id}><LeagueRow {...r} /></li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
