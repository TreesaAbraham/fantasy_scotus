import React, { useState } from 'react';
import '../scotus.css';          // optional: global styles already imported elsewhere
import TopNav from '../components/TopNav';

export default function LeaguesScreen() {
  // ⭐ local toggle for the favourite-star
  const [isFav, setIsFav] = useState(false);

  return (
    <>
      {/* Sticky page header */}
      <TopNav
        title="Leagues"
        showBack                 // back arrow visible
        isFavourite={isFav}      // ← UK spelling to match TopNav
        onToggleFavourite={() => setIsFav((f) => !f)}
      />

      <main
        className="page"
        style={{
          padding: 'var(--space-md)',
          minHeight: 'calc(100vh - 60px - var(--space-md))',
          overflowY: 'auto',
        }}
      >
        <h1>Leagues — coming soon…</h1>
      </main>
    </>
  );
}
