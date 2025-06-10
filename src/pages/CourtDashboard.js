// src/pages/CourtDashboard.js
import React from 'react';
import TopNav          from '../components/TopNav';
import PillTabBar      from '../components/PillTabBar';
import DashboardCard   from '../components/DashboardCard';
import illustration    from '../assets/predictions-illustrations.png';


export default function CourtDashboard() {
  const tabs = [
    { id: 'all',  label: 'All',       icon: '📄' },
    { id: 'open', label: 'Ongoing',   icon: '🔥' },
    { id: 'done', label: 'Completed', icon: '📋' },
  ];

  return (
    <>
      <TopNav
        title="Court"
        onBack={() => window.history.back()}
        onSearch={() => alert('search tapped')}
      />

      <PillTabBar
        tabs={tabs}
        onChange={(id) => console.log('selected tab:', id)}
      />

      <main className="page">
        {/* Existing placeholder header (keep or remove as you like) */}
        <h1>Court Dashboard (work in progress)</h1>

        {/* 🔹 Predictions call-out card */}
        <section style={{ marginTop: '1.5rem' }}>
        
        <DashboardCard
            title="Check your predictions"
            copy="See how your forecasts stack up."
            illustration={illustration}
            progress={70}
/>

        </section>
      </main>
    </>
  );
}
