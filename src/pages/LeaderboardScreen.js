// src/pages/LeaderboardScreen.js
import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import SegmentedToggle from '../components/SegmentedToggle';
import { space } from '../theme';

/**
 * Leaderboard page showing either the global user leaderboard or the top
 * leagues, selected via a segmented toggle. Favourite state is local until
 * we wire this to real data.
 */
export default function LeaderboardScreen() {
  /* ─── Local UI state ─────────────────────────────────────────────── */
  const [favourite, setFavourite] = useState(false);
  const [view, setView] = useState('users'); // 'users' | 'leagues'

  /* ─── Segmented‑toggle config ───────────────────────────────────── */
  const segments = [
    { id: 'users',   label: 'Leaderboard' },
    { id: 'leagues', label: 'Leagues', badge: 12 }, // placeholder count
  ];

  /* ─── Render ────────────────────────────────────────────────────── */
  return (
    <>
      {/* Page header */}
      <TopNav
        title="Leaderboard"
        isFavourite={favourite}
        onToggleFavourite={() => setFavourite(!favourite)}
      />

      {/* Scrollable page body */}
      <main
        className="page"
        style={{
          padding: space.md,
          minHeight: 'calc(100vh - 60px - var(--space-md))',
          overflowY: 'auto',
        }}
      >
        {/* Segmented switch between user & league leaderboards */}
        <SegmentedToggle
          segments={segments}
          selectedId={view}
          onSelect={setView}
        />

        {/* Placeholder content blocks */}
        {view === 'users' ? (
          <section style={{ marginTop: space.lg }}>
            <p>🏆 User leaderboard coming soon…</p>
          </section>
        ) : (
          <section style={{ marginTop: space.lg }}>
            <p>🏅 League leaderboard coming soon…</p>
          </section>
        )}
      </main>
    </>
  );
}
