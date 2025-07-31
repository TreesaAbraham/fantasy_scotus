// src/pages/CasesScreen.js
import React, { useState } from 'react';
import '../scotus.css';

/* UI */
import TopNav          from '../components/TopNav';
import SearchBar       from '../components/SearchBar';
import SegmentedToggle from '../components/SegmentedToggle';
import CaseRow         from '../components/CaseRow';
import CaseSkeletonRow from '../components/CaseSkeletonRow';
import EmptyState      from '../components/EmptyState';

/* Data */
import { useCases } from '../hooks/useCases';
import useDebounce  from '../hooks/useDebounce';

/* Tokens */
import { space } from '../theme';

export default function CasesScreen() {
  /* star toggle */
  const [isFav, setIsFav] = useState(false);

  /* 'upcoming' | 'all' */
  const [mode, setMode] = useState('upcoming');

  /* search */
  const [term, setTerm] = useState('');
  const debounced = useDebounce(term, 300);

  /* fetch */
  const { rows, loading, error } = useCases(mode, debounced);

  /* toggle buttons (badges 0 until backend counts ready) */
  const segments = [
    { id: 'upcoming', label: 'Upcoming',  badge: 0 },
    { id: 'all',      label: 'All Cases', badge: 0 },
  ];

  return (
    <>
      {/* header */}
      <TopNav
        title="Case List"
        showBack
        isFavourite={isFav}
        onToggleFavourite={() => setIsFav(f => !f)}
      />

      {/* controls */}
      <div className="cases-controls" style={{ padding: `0 ${space.md}` }}>
        <SearchBar value={term} onSearch={setTerm} />
        <div style={{ marginTop: space.sm }}>
          <SegmentedToggle
            segments={segments}
            selectedId={mode}
            onSelect={setMode}
          />
        </div>
      </div>

      {/* content */}
      <main
        className="cases-page"
        style={{
          padding: space.md,
          minHeight: 'calc(100vh - 60px - var(--space-md))',
          overflowY: 'auto',
        }}
      >
        {/* loading */}
        {loading && (
          <ul className="list-unstyled">
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i}>
                <CaseSkeletonRow />
              </li>
            ))}
          </ul>
        )}

        {/* error */}
        {error && (
          <p className="cases-error">
            {error.message}
          </p>
        )}

        {/* empty */}
        {!loading && rows.length === 0 && !error && (
          <EmptyState illustration="/img/no-data.svg">
            No cases match your search.
          </EmptyState>
        )}

        {/* results */}
        {!loading && rows.length > 0 && (
          <ul className="list-unstyled">
            {rows.map(r => (
              <li key={r.id}>
                <CaseRow {...r} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
