// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './scotus.css';                       // your global stylesheet
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Welcome            from './Welcome';
import GettingStarted     from './GettingStarted';
import AboutFantasySCOTUS from './AboutFantasy';
import OfficialRules      from './OfficialRules';
import Signup             from './Signup';
import Login              from './Login';
import MainApp            from './MainApp';
import { useAuth }        from './hooks/useAuth';

function App() {
  const session = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Landing page */}
        <Route path="/" element={<Welcome />} />

        {/* 2. Your info pages */}
        <Route path="/getting-started"       element={<GettingStarted />} />
        <Route path="/about-fantasy-scotus"  element={<AboutFantasySCOTUS />} />
        <Route path="/official-rules"        element={<OfficialRules />} />

        {/* 3. Auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login"  element={<Login />}  />

        {/* 4. Protected */}
        <Route
          path="/app/*"
          element={
            session
              ? <MainApp />
              : <Navigate to="/" replace />
          }
        />

        {/* 5. Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
