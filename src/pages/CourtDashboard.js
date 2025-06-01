// src/pages/CourtDashboard.js
import React from 'react';
import TopNav     from '../components/TopNav';
import PillTabBar from '../components/PillTabBar';

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
        <h1>Court Dashboard (work in progress)</h1>
      </main>
    </>
  );
}
