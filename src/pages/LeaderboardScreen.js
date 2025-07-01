// src/pages/LeaderboardScreen.js
import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import SegmentedToggle from '../components/SegmentedToggle';
import LeaderboardRow from '../components/LeaderboardRow';
import { useUserLeaderboard } from '../hooks/useUserLeaderboard';
import { useLeagueLeaderboard } from '../hooks/useLeagueLeaderboard';
import { space } from '../theme';

/**
 * Renders either the global user leaderboard or the leagues leaderboard based
 * on a segmented toggle. Pulls live data from Supabase via custom hooks.
 */
export default function LeaderboardScreen() {
  const [view, setView] = useState('users');

  // ─── Live hooks ──────────────────────────────────────────────────
  const {
    rows: userRows,
    loading: loadingUsers,
    refetch: refetchUsers,
  } = useUserLeaderboard();

  const {
    rows: leagueRows,
    loading: loadingLeagues,
    refetch: refetchLeagues,
  } = useLeagueLeaderboard();

  const handleSelectView = (id) => {
    setView(id);
    // Refresh the newly visible list in case it’s stale
    if (id === 'users' && typeof refetchUsers === 'function') refetchUsers();
    if (id === 'leagues' && typeof refetchLeagues === 'function') refetchLeagues();
  };

  const segments = [
    { id: 'users', label: 'Leaderboard' },
    { id: 'leagues', label: 'Leagues' },
  ];

  const rows = view === 'users' ? userRows : leagueRows;
  const loading = view === 'users' ? loadingUsers : loadingLeagues;

  return (
    <>
      <TopNav title="Leaderboard" showBack={true} />

      {/* Segmented control */}
      <div style={{ padding: `${space.sm} ${space.md}` }}>
        <SegmentedToggle
          segments={segments}
          selectedId={view}
          onSelect={handleSelectView}
        />
      </div>

      {/* List container */}
      <main
        className="page"
        style={{
          padding: `${space.md} ${space.md} var(--space-lg)`,
          minHeight: 'calc(100vh - 60px - var(--space-md))',
          overflowY: 'auto',
        }}
      >
        {loading ? (
          <p>Loading…</p>
        ) : rows.length === 0 ? (
          <p>No data yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {rows.map((r) => (
              <li key={`${view}-${r.rank}`}>
                <LeaderboardRow {...r} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
