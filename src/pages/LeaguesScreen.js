// src/pages/LeaguesScreen.js
import React, { useState } from 'react';
import '../scotus.css';

/* ─── UI components ─────────────────────────────────────────────── */
import TopNav            from '../components/TopNav';
import SegmentedToggle   from '../components/SegmentedToggle';
import LeagueRow         from '../components/LeagueRow';
import LeagueSkeletonRow from '../components/LeagueSkeletonRow';
import EmptyState        from '../components/EmptyState';

/* ─── Data hook ─────────────────────────────────────────────────── */
import { useLeagues }    from '../hooks/useLeagues';

/* ─── Design tokens ─────────────────────────────────────────────── */
import { space } from '../theme';

export default function LeaguesScreen() {
  /* favourite-star toggle */
  const [isFav, setIsFav] = useState(false);

  /* segmented toggle: 'all' | 'law' */
  const [mode, setMode] = useState('all');

  /* toggle config (badge counts hard-coded until API returns them) */
  const segments = [
    { id: 'all', label: 'All Leagues',     badge: 42 },
    { id: 'law', label: 'Law-School Only', badge: 8  },
  ];

  /* fetch data from Supabase */
  const { rows, loading, error } = useLeagues(mode);

  return (
    <>
      {/* ───────── Header ───────── */}
      <TopNav
        title="Leagues"
        showBack
        isFavourite={isFav}
        onToggleFavourite={() => setIsFav(f => !f)}
      />

      {/* ───────── Segmented toggle ───────── */}
      <div style={{ padding: `0 ${space.md}` }}>
        <SegmentedToggle
          segments={segments}
          selectedId={mode}
          onSelect={id => setMode(id)}
        />
      </div>

      {/* ───────── Main content ───────── */}
      <main
        className="page"
        style={{
          padding: space.md,
          minHeight: 'calc(100vh - 60px - var(--space-md))',
          overflowY: 'auto',
        }}
      >
        {/* loading skeleton rows */}
        {loading && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i}>
                <LeagueSkeletonRow />
              </li>
            ))}
          </ul>
        )}

        {/* error state */}
        {error && (
          <p style={{ color: 'red', textAlign: 'center' }}>
            {error.message}
          </p>
        )}

        {/* empty state */}
        {!loading && rows.length === 0 && !error && (
          <EmptyState illustration="/img/no-data.svg">
            Nothing here yet—check back later!
          </EmptyState>
        )}

        {/* populated list */}
        {!loading && rows.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {rows.map(r => (
              <li key={r.id}>
                <LeagueRow {...r} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
