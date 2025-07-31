// src/pages/CasesScreen.js
import React, { useState } from 'react';
import '../scotus.css';

/* UI components */
import TopNav              from '../components/TopNav';
import SearchBar           from '../components/SearchBar';
import SegmentedToggle     from '../components/SegmentedToggle';
import SearchResultsHeader from '../components/SearchResultsHeader';
import CaseRow             from '../components/CaseRow';
import CaseSkeletonRow     from '../components/CaseSkeletonRow';
import EmptyState          from '../components/EmptyState';

/* Data + helpers */
import { useCases } from '../hooks/useCases';
import useDebounce  from '../hooks/useDebounce';

/* Design tokens */
import { space } from '../theme';

export default function CasesScreen() {
  /* favourite-star */
  const [isFav, setIsFav] = useState(false);

  /* segmented toggle → 'upcoming' | 'all' */
  const [mode, setMode] = useState('upcoming');

  /* search term (debounced) */
  const [term, setTerm] = useState('');
  const debounced = useDebounce(term, 300);       // hasQuery flag

  /* fetch data */
  const { rows, loading, error } = useCases(mode, debounced);

  /* toggle config (badge counts placeholder until you calculate them) */
  const segments = [
    { id: 'upcoming', label: 'Upcoming',  badge: 0 },
    { id: 'all',      label: 'All Cases', badge: 0 },
  ];

  return (
    <>
      {/* ───── Header bar ───── */}
      <TopNav
        title="Case List"
        showBack
        isFavourite={isFav}
        onToggleFavourite={() => setIsFav(f => !f)}
      />

      {/* ───── Controls ───── */}
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

      {/* ───── Content area ───── */}
      <main
        className="cases-page"
        style={{
          padding: space.md,
          minHeight: 'calc(100vh - 60px - var(--space-md))',
          overflowY: 'auto',
        }}
      >
        {/* Loading skeletons */}
        {loading && (
          <ul className="list-unstyled">
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i}>
                <CaseSkeletonRow />
              </li>
            ))}
          </ul>
        )}

        {/* Error */}
        {error && (
          <p className="cases-error">{error.message}</p>
        )}

        {/* Empty */}
        {!loading && rows.length === 0 && !error && (
          <EmptyState illustration="/img/no-data.svg">
            No cases match your search.
          </EmptyState>
        )}

        {/* Results */}
        {!loading && rows.length > 0 && !error && (
          <>
            {/* Search-results banner appears only when a query is active */}
            {debounced && (
              <SearchResultsHeader />
            )}

            <ul className="list-unstyled">
              {rows.map(r => (
                <li key={r.id}>
                  <CaseRow {...r} />
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </>
  );
}
