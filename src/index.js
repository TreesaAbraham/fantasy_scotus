// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './scotus.css';                      // ← your one-and-only global stylesheet
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Welcome from './Welcome';
import Signup  from './Signup';
import Login   from './Login';
import MainApp from './MainApp';
import { useAuth } from './hooks/useAuth';

function App() {
  const session = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Always show Welcome at the root */}
        <Route path="/" element={<Welcome />} />

        {/* 2. Public pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login"  element={<Login />}  />

        {/* 3. Protected area */}
        <Route
          path="/app/*"
          element={
            session
              ? <MainApp />
              : <Navigate to="/" replace />
          }
        />

        {/* 4. Fallback all other URLs back to root */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// mount it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
