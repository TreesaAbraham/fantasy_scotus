// src/pages/CasesScreen.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../scotus.css'; // Import your CSS styles

import TopNav         from "../components/TopNav";
import SearchBar      from "../components/SearchBar";
import SegmentedToggle from "../components/SegmentedToggle";

export default function CasesScreen() {
  const navigate = useNavigate();

  /* ─── Local UI state ─────────────────────────────────────────── */
  const [segment,    setSegment]    = useState("upcoming"); // "upcoming" | "all"
  const [searchTerm, setSearchTerm] = useState("");

  /* ─── (Placeholder) counts for the badge ────────────────────── */
  // Later you’ll fetch these from Supabase:
  const upcomingCount = 5;
  const allCount      = 23;

  /* ─── Segment definitions passed to SegmentedToggle ─────────── */
  const caseSegments = [
    { id: "upcoming", label: "Upcoming",  badge: upcomingCount },
    { id: "all",      label: "All Cases", badge: allCount      },
  ];

  /* ─── Render ────────────────────────────────────────────────── */
  return (
    <>
      {/* Top bar with back arrow & optional favourite */}
      <TopNav
        title="Case List"
        showBack
        showFavourite
        favourite={false}
        onBack={() => navigate(-1)}
        onToggleFavourite={() => {/* TODO */}}
      />

      {/* Search + filter controls */}
      <div style={{ padding: "1rem" }}>
        <SearchBar
          value={searchTerm}
          onSearch={setSearchTerm}
        />

        <div style={{ marginTop: "1rem" }}>
          <SegmentedToggle
            segments={caseSegments}
            selected={segment}
            onSelect={setSegment}
          />
        </div>
      </div>

      {/* Results area (still a stub for now) */}
      <section style={{ padding: "1rem" }}>
        <p>Cases coming soon…</p>
      </section>
    </>
  );
}
