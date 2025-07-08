// src/pages/LeaguesScreen.js
import React, { useState } from 'react';
import '../scotus.css';                       // global styles (optional import here)
import TopNav from '../components/TopNav';
import SegmentedToggle from '../components/SegmentedToggle';

export default function LeaguesScreen() {
  /* ───── Favourite-star state ───── */
  const [isFav, setIsFav] = useState(false);

  /* ───── Segmented-toggle state ─── */
  const [mode, setMode] = useState('all');      // 'all' | 'law'

  /* config for the toggle — badges hard-coded for now */
  const segments = [
    { id: 'all', label: 'All Leagues',     badge: 42 },
    { id: 'law', label: 'Law-School Only', badge: 8  },
  ];

  return (
    <>
      {/* Sticky page header */}
      <TopNav
        title="Leagues"
        showBack                     // back arrow
        isFavourite={isFav}          // UK spelling matches TopNav prop
        onToggleFavourite={() => setIsFav(f => !f)}
      />

      {/* Segmented control */}
      <div style={{ padding: 'var(--space-md) var(--space-md) 0' }}>
        <SegmentedToggle
          segments={segments}
          selectedId={mode}
          onSelect={id => setMode(id)}
        />
      </div>

      {/* Main content placeholder */}
      <main
        className="page"
        style={{
          padding: 'var(--space-md)',
          minHeight: 'calc(100vh - 60px - var(--space-md))',
          overflowY: 'auto',
        }}
      >
        <h1>
          {mode === 'all' ? 'All Leagues' : 'Law-School Leagues'} — coming soon…
        </h1>
      </main>
    </>
  );
}
