// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './scotus.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

/* ─── Page components ──────────────────────────────────────────────── */
import HomeScreen        from './pages/HomeScreen';
import GettingStarted from './pages/GettingStarted';
import AboutFantasy   from './pages/AboutFantasy';
import OfficialRules  from './pages/OfficialRules';
import LeagueList     from './pages/LeagueList';
import CasesList      from './pages/CaseList';
import Predictions    from './pages/Predictions';
import Signup         from './pages/Signup';
import Login          from './pages/Login';
import CourtDashboard from './pages/CourtDashboard';
import MainApp        from './MainApp';

/* ─── Shared UI & hooks ───────────────────────────────────────────── */
import Navbar    from './components/Navbar';
import BottomNav from './components/BottomNav';
import { useAuth } from './hooks/useAuth';

/* ─── App root ─────────────────────────────────────────────────────── */
function App() {
  const session = useAuth();

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Landing */}
        <Route path="/" element={<HomeScreen />} />

        {/* Info pages */}
        <Route path="/getting-started"      element={<GettingStarted />} />
        <Route path="/about-fantasy-scotus" element={<AboutFantasy />} />
        <Route path="/official-rules"       element={<OfficialRules />} />

        {/* Core lists & dashboards */}
        <Route path="/leagues"     element={<LeagueList />} />
        <Route path="/cases"       element={<CasesList />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/court"       element={<CourtDashboard />} />

        {/* ───── Temporary placeholder pages for BottomNav ───── */}
        <Route path="/favorites" element={<p style={{ padding: 20 }}>⭐ Starred screen — TBD</p>} />
        <Route path="/create"    element={<p style={{ padding: 20 }}>➕ Create screen — TBD</p>} />
        <Route path="/profile"   element={<p style={{ padding: 20 }}>👤 Profile screen — TBD</p>} />

        {/* Auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login"  element={<Login  />} />

        {/* Protected area */}
        <Route
          path="/app/*"
          element={session ? <MainApp /> : <Navigate to="/" replace />}
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Persistent mobile bottom navigation */}
      <BottomNav />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
