// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './scotus.css';                          // global styles

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// 📄 page components (now all live in src/pages/)
import Welcome         from './pages/Welcome';
import GettingStarted  from './pages/GettingStarted';
import AboutFantasy    from './pages/AboutFantasy';
import OfficialRules   from './pages/OfficialRules';
import LeagueList      from './pages/LeagueList';
import CasesList       from './pages/CaseList';      // renamed file
import Signup          from './pages/Signup';
import Login           from './pages/Login';
import CourtDashboard  from './pages/CourtDashboard'; // new scaffold

// other app pieces
import MainApp  from './MainApp';
import { useAuth } from './hooks/useAuth';
import Navbar from './components/Navbar';


function App() {
  const session = useAuth();

  return (
    <BrowserRouter>
    <Navbar /> {/* Reusable navigation bar */}
      <Routes>
        {/* 1. Landing page */}
        <Route path="/" element={<Welcome />} />

        {/* 2. Info pages */}
        <Route path="/getting-started"      element={<GettingStarted />} />
        <Route path="/about-fantasy-scotus" element={<AboutFantasy />} />
        <Route path="/official-rules"       element={<OfficialRules />} />

        {/* 3. League list */}
        <Route path="/leagues" element={<LeagueList />} />

        {/* 4. Cases list */}
        <Route path="/cases" element={<CasesList />} />

        {/* 5. Dashboard (new) */}
        <Route path="/court" element={<CourtDashboard />} />

        {/* 6. Authentication */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login"  element={<Login />}  />

        {/* 7. Protected area */}
        <Route
          path="/app/*"
          element={session ? <MainApp /> : <Navigate to="/" replace />}
        />

        {/* 8. Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
