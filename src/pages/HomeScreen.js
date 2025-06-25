// src/pages/HomeScreen.js
import React, { useState } from 'react';
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
  /* ─ user & profile ─ */
  const session  = useAuth();
  const userId   = session?.user?.id;
  const { profile } = useUserProfile(userId);
  const username  = profile?.username ?? 'Friend';
  const avatarUrl = profile?.avatar_url;

  /* ─ points ─ */
  const { points, loading: loadingPoints } = useDailyPoints(userId);

  /* ─ league pills state ─ */
  const leagues = [
    { id: 'all',       label: 'All',        icon: <FaBalanceScale /> },
    { id: 'lawschool', label: 'Law School', icon: <FaUniversity /> },
    { id: 'friends',   label: 'Friends' },
  ];
  const [selectedLeagueId, setSelectedLeagueId] = useState('all');

  /* ─ cases for carousel ─ */
  const { cases } = useCasesByLeague(selectedLeagueId);

  return (
    <main
      className="page"
      style={{
        padding: space.md,
        minHeight: 'calc(100vh - 60px - var(--space-md))',
        overflowY: 'auto',
      }}
    >
      <GreetingHeader username={username} avatarUrl={avatarUrl} />
      <PointsBadge points={points} loading={loadingPoints} />

      <LeaguePillsRow
        leagues={leagues}
        defaultId="all"
        onChange={setSelectedLeagueId}
      />

      {/* ─── NEW: carousel appears right here ─── */}
      <CaseCarousel cases={cases} />

      <p>Welcome back! 🚀 Build your widgets here.</p>
    </main>
  );
}
