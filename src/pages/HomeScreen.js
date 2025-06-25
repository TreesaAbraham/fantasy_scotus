// src/pages/HomeScreen.js
import React from 'react';
import { space } from '../theme';                     // spacing tokens
import { useAuth } from '../hooks/useAuth';
import { useUserProfile } from '../hooks/useUserProfile';
import { useDailyPoints } from '../hooks/useDailyPoints';
import GreetingHeader from '../components/GreetingHeader';
import PointsBadge from '../components/PointsBadge';
import LeaguePillsRow from '../components/LeaguePillsRow';
import { FaBalanceScale, FaUniversity } from 'react-icons/fa';
import '../scotus.css';

export default function HomeScreen() {
  /* ───────────────────────────────────────────────────────── user + profile */
  const session   = useAuth();
  const userId    = session?.user?.id;

  const { profile } = useUserProfile(userId);
  const username   = profile?.username ?? 'Friend';
  const avatarUrl  = profile?.avatar_url;

  /* ───────────────────────────────────────────────────────── today’s points */
  const { points, loading: loadingPoints } = useDailyPoints(userId);

  /* ───────────────────────────────────────────────────────── league pills  */
  const leagueOptions = [
    { id: 'all',       label: 'All',        icon: <FaBalanceScale /> },
    { id: 'lawschool', label: 'Law School', icon: <FaUniversity /> },
    { id: 'friends',   label: 'Friends' },
  ];

  return (
    <main
      className="page"
      style={{
        padding: space.md,
        minHeight: 'calc(100vh - 60px - var(--space-md))', // 60 px BottomNav
        overflowY: 'auto',
      }}
    >
      {/* Greeting */}
      <GreetingHeader username={username} avatarUrl={avatarUrl} />

      {/* Today’s Points */}
      <PointsBadge points={points} loading={loadingPoints} />

      {/* League selector */}
      <LeaguePillsRow
        leagues={leagueOptions}
        defaultId="all"
        onChange={(id) => console.log('selected league', id)}
      />

      {/* further home widgets go here */}
      <p>Welcome back! 🚀 Build your widgets here.</p>
    </main>
  );
}
