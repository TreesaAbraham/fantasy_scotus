// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./scotus.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

/* ─── Page components ─────────────────────────────────────────────── */
import HomeScreen            from "./pages/HomeScreen";
import GettingStarted        from "./pages/GettingStarted";
import AboutFantasy          from "./pages/AboutFantasy";
import OfficialRules         from "./pages/OfficialRules";
import LeagueList            from "./pages/LeagueList";
import Predictions           from "./pages/PredictionsScreen.js";
import Signup                from "./pages/Signup";
import Login                 from "./pages/Login";
import CourtDashboard        from "./pages/CourtDashboard";
import LeaderboardScreen     from "./pages/LeaderboardScreen"; // Users leaderboard
import MainApp               from "./MainApp";
import LeaguesScreen         from "./pages/LeaguesScreen";     // ✅ your leagues-only page
import CasesScreen           from "./pages/CasesScreen";

/* ─── Shared UI & hooks ───────────────────────────────────────────── */
import BottomNav from "./components/BottomNav";
import { useAuth } from "./hooks/useAuth";

/* ─── Layout shell (shared chrome) ────────────────────────────────── */
function Shell() {
  return (
    <>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <BottomNav /> {/* bottom-docked */}
    </>
  );
}

/* ─── App root ─────────────────────────────────────────────────────── */
function App() {
  const session = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          {/* Home */}
          <Route index element={<HomeScreen />} />
          <Route path="league/:leagueId" element={<HomeScreen />} />

          {/* Info pages */}
          <Route path="getting-started"      element={<GettingStarted />} />
          <Route path="about-fantasy-scotus" element={<AboutFantasy />} />
          <Route path="official-rules"       element={<OfficialRules />} />

          {/* Core lists & dashboards */}
          <Route path="leagues"       element={<LeaguesScreen />} />   {/* your leagues screen */}
          <Route path="league-list"   element={<LeagueList />} />      {/* avoid duplicate /leagues */}
          <Route path="cases"         element={<CasesScreen />} />
          <Route path="predictions"   element={<Predictions />} />
          <Route path="court"         element={<CourtDashboard />} />

          {/* Leaderboards */}
          <Route path="leaderboard"           element={<LeaderboardScreen />} />  {/* users (default) */}
          <Route path="leaderboard/users"     element={<LeaderboardScreen />} />  {/* users */}
          <Route path="leaderboard/leagues"   element={<LeaguesScreen />} />      {/* ✅ leagues-only */}

          {/* Other bottom-nav targets */}
          <Route path="favorites" element={<p style={{ padding: 20 }}>⭐ Starred screen — TBD</p>} />
          <Route path="create"    element={<p style={{ padding: 20 }}>➕ Create screen — TBD</p>} />
          <Route path="profile"   element={<p style={{ padding: 20 }}>👤 Profile screen — TBD</p>} />

          {/* Auth */}
          <Route path="signup" element={<Signup />} />
          <Route path="login"  element={<Login  />} />

          {/* Protected area */}
          <Route
            path="app/*"
            element={session ? <MainApp /> : <Navigate to="/" replace />}
          />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
