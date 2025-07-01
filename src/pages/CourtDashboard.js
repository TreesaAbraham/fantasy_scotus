// src/pages/CourtDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../scotus.css';

import TopNav        from '../components/TopNav';
import PillTabBar    from '../components/PillTabBar';
import DashboardCard from '../components/DashboardCard';

// 🔹 new artwork files you just added
import PredictionsCard from '../components/PredictionsCard';
import leaderboardIllu from '../assets/leaderboard-illustrations.png';
import casesIllu       from '../assets/cases-illustrations.png';
import leaguesIllu     from '../assets/leagues-illustrations.png';

export default function CourtDashboard() {
  /* ------------------------------------------------------------------ */
  /* 1. Filter tabs along the top                                       */
  /* ------------------------------------------------------------------ */
  const tabs = [
    { id: 'all',  label: 'All',       icon: '📄' },
    { id: 'open', label: 'Ongoing',   icon: '🔥' },
    { id: 'done', label: 'Completed', icon: '📋' },
  ];

  /* ------------------------------------------------------------------ */
  /* 2. Card data (one object → one dashboard card)                     */
  /* ------------------------------------------------------------------ */
  const cardData = [
    {
      id:          'leaderboard',
      title:       'Leaderboard',
      copy:        'See who’s topping the charts.',
      illustration: leaderboardIllu,
      progress:    70,
      route:       '/leaderboard',          // future route
    },
    {
      id:          'cases',
      title:       'Cases',
      copy:        'Track progress on SCOTUS docket.',
      illustration: casesIllu,
      progress:    60,
      route:       '/cases',
    },
    {
      id:          'leagues',
      title:       'Leagues',
      copy:        'Manage or join leagues.',
      illustration: leaguesIllu,
      progress:    0,
      route:       '/leagues',
    },
  ];

  const navigate = useNavigate();

  /* ------------------------------------------------------------------ */
  /* 3. Render                                                          */
  /* ------------------------------------------------------------------ */
  return (
    <>
      {/* Top bar with back arrow + search icon */}
      <TopNav
        title="Court"
        onBack={() => window.history.back()}
        onSearch={() => alert('search tapped')}
      />

      {/* Pill-style tab bar */}
      <PillTabBar
        tabs={tabs}
        onChange={(id) => console.log('selected tab:', id)}
      />
      {/* Stand-alone Predictions call-out */}
      <section style={{ margin: '.75rem 0' }}>
        <PredictionsCard />
      </section>


      {/* Dashboard cards grid */}
      <main className="page">
        <section className="dashboard-cards">
          {cardData.map((c) => (
            <DashboardCard
              key={c.id}
              title={c.title}
              copy={c.copy}
              illustration={c.illustration}
              progress={c.progress}
              onClick={() => navigate(c.route)}
            />
          ))}
        </section>
      </main>
    </>
  );
}







