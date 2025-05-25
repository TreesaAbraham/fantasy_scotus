// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './scotus.css';  // Global stylesheet
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Welcome        from './Welcome';
import GettingStarted from './GettingStarted';
import AboutFantasy   from './AboutFantasy';
import OfficialRules  from './OfficialRules';
import LeagueList     from './LeagueList';
import Cases          from './cases';
import Signup         from './Signup';
import Login          from './Login';
import MainApp        from './MainApp';
import { useAuth }    from './hooks/useAuth';

function App() {
  const session = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Landing page */}
        <Route path="/" element={<Welcome />} />

        {/* 2. Info pages */}
        <Route path="/getting-started"      element={<GettingStarted />} />
        <Route path="/about-fantasy-scotus" element={<AboutFantasy />} />
        <Route path="/official-rules"       element={<OfficialRules />} />

        {/* 3. League list */}
        <Route path="/leagues" element={<LeagueList />} />

        {/* 4. Cases page */}
        <Route path="/cases" element={<Cases />} />

        {/* 5. Authentication */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login"  element={<Login />}  />

        {/* 6. Protected application */}
        <Route
          path="/app/*"
          element={
            session
              ? <MainApp />
              : <Navigate to="/" replace />
          }
        />

        {/* 7. Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// Mount the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
