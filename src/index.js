// src/index.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Welcome from './Welcome';
import Signup from './Signup';
import Login from './Login';
import MainApp from './MainApp';
import { useAuth } from './hooks/useAuth';

function Index() {
  const session = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={session ? <Navigate to="/app" /> : <Welcome />}
        />

        {/* Protected */}
        <Route
          path="/app/*"
          element={session ? <MainApp /> : <Navigate to="/" />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to={session ? "/app" : "/"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
// src/app.js
