// src/pages/HomeScreen.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { space } from '../theme';

import { useAuth }           from '../hooks/useAuth';
import { useUserProfile }    from '../hooks/useUserProfile';
import { useDailyPoints }    from '../hooks/useDailyPoints';
import { useCasesByLeague }  from '../hooks/useCasesByLeague';

import GreetingHeader  from '../components/GreetingHeader';
import PointsBadge     from '../components/PointsBadge';
import LeaguePillsRow  from '../components/LeaguePillsRow';
import CaseCarousel    from '../components/CaseCarousel';

import { FaBalanceScale, FaUniversity } from 'react-icons/fa';
import '../scotus.css';

export default function HomeScreen() {
  /* ───── 1. Auth & profile ────────────────────────────────────────── */
  const session   = useAuth();
  const userId    = session?.user?.id;

  const { profile } = useUserProfile(userId);
  const username   = profile?.username ?? 'Friend';
  const avatarUrl  = profile?.avatar_url;

  /* ───── 2. Points for today ──────────────────────────────────────── */
  const { points, loading: loadingPoints } = useDailyPoints(userId);

  /* ───── 3. League-ID from URL & navigation helper ───────────────── */
  const { leagueId = 'all' } = useParams();       // '' when on /
  const navigate = useNavigate();

  /* ───── 4. Case data filtered by league ─────────────────────────── */
  const { cases } = useCasesByLeague(leagueId);

  /* ───── 5. Pill config (icons, labels) ──────────────────────────── */
  const leagues = [
    { id: 'all',       label: 'All',        icon: <FaBalanceScale /> },
    { id: 'lawschool', label: 'Law School', icon: <FaUniversity /> },
    { id: 'friends',   label: 'Friends' },
  ];

  const handleSelectLeague = (id) => {
    // push either `/` or `/league/:id`
    navigate(id === 'all' ? '/' : `/league/${id}`);
  };

  /* ───── 6. Render ───────────────────────────────────────────────── */
  return (
    <main
      className="page"
      style={{
        padding: space.md,
        minHeight: 'calc(100vh - 60px - var(--space-md))',
        overflowY: 'auto',
      }}
    >
      {/* Greeting */}
      <GreetingHeader username={username} avatarUrl={avatarUrl} />

      {/* Today’s Points */}
      <PointsBadge points={points} loading={loadingPoints} />

      {/* League selector pills */}
      <LeaguePillsRow
        leagues={leagues}
        defaultId={leagueId}
        onChange={handleSelectLeague}
      />

      {/* Horizontally scrollable case carousel */}
      <CaseCarousel cases={cases} />

      {/* Placeholder for future widgets */}
      <p>Welcome back! 🚀 Build your widgets here.</p>
    </main>
  );
}
