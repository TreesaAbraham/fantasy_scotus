// ✅ should look like this
import React from 'react';

export default function LeaguesScreen() {
  return (
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
  );
}
