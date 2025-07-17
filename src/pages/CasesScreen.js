// src/pages/CasesScreen.js
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import TopNav          from "../components/TopNav";
import SearchBar       from "../components/SearchBar";
import SegmentedToggle from "../components/SegmentedToggle";
import CaseRow         from "../components/CaseRow";

export default function CasesScreen() {
  const navigate = useNavigate();

  /* ─── Local UI state ─────────────────────────────────────────── */
  const [segment,    setSegment]    = useState("upcoming"); // "upcoming" | "all"
  const [searchTerm, setSearchTerm] = useState("");

  /* ─── Mock data (replace with Supabase) ─────────────────────── */
  const cases = useMemo(
    () => [
      { id: 1, title: "Smith v. Jones",                       points: 18, status: "upcoming" },
      { id: 2, title: "Roe v. Wade (2025 Reconsideration)",   points: 25, status: "upcoming" },
      { id: 3, title: "Some Very Long Case Title That Goes On And On v. US", points: 5, status: "all" },
      { id: 4, title: "Brown v. Board of Education",          points: 30, status: "all" },
    ],
    [] // stable reference → no ESLint warning
  );

  /* ─── Counts for badge chips ────────────────────────────────── */
  const upcomingCount = cases.filter(c => c.status === "upcoming").length;
  const allCount      = cases.length;

  /* ─── Segment definitions for toggle ────────────────────────── */
  const caseSegments = [
    { id: "upcoming", label: "Upcoming",  badge: upcomingCount },
    { id: "all",      label: "All Cases", badge: allCount      },
  ];

  /* ─── Derived list: apply segment + search filters ─────────── */
  const visibleCases = useMemo(() => {
    // segment filter
    const pool =
      segment === "upcoming"
        ? cases.filter(c => c.status === "upcoming")
        : cases;

    // search filter
    const term = searchTerm.trim().toLowerCase();
    return term
      ? pool.filter(c => c.title.toLowerCase().includes(term))
      : pool;
  }, [segment, searchTerm, cases]);

  /* ─── Render ───────────────────────────────────────────────── */
  return (
    <>
      <TopNav
        title="Case List"
        showBack
        showFavourite
        favourite={false}
        onBack={() => navigate(-1)}
        onToggleFavourite={() => {/* TODO: persist favourite */}}
      />

      {/* Search + Segmented filter */}
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

      {/* Case list */}
      <section style={{ padding: 0 }}>
        {visibleCases.map((c, idx) => (
          <CaseRow
            key={c.id}
            rank={idx + 1}
            name={c.title}
            points={c.points}
            onClick={() => navigate(`/cases/${c.id}`)}
          />
        ))}

        {visibleCases.length === 0 && (
          <p style={{ textAlign: "center", padding: "2rem" }}>
            No cases match your search.
          </p>
        )}
      </section>
    </>
  );
}
