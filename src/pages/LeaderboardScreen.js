import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import { space } from '../theme';

/** Placeholder until real leaderboard data lands */
export default function LeaderboardScreen() {
    const [fav, setFav] = useState(false);
  return (
    <>
      <TopNav
        title="Leaderboard"
        isFavourite={fav}
        onToggleFavourite={() => setFav(!fav)}
      />
    <main
      className="page"
      style={{
        padding: space.md,
        /* matches every other page: */
        minHeight: 'calc(100vh - 60px - var(--space-md))',
        overflowY: 'auto',
      }}
    >
      <h1 style={{ marginBottom: space.md }}>Leaderboard</h1>
      <p>🏆 Coming soon…</p>
    </main>
    </>
  );
}
