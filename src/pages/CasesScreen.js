import React, { useState } from 'react';
import '../scotus.css';

/* UI components */
import TopNav          from '../components/TopNav';
import SearchBar       from '../components/SearchBar';
import SegmentedToggle from '../components/SegmentedToggle';
import CaseRow         from '../components/CaseRow';
import CaseSkeletonRow from '../components/CaseSkeletonRow';
import EmptyState      from '../components/EmptyState';

/* Data hook */
import { useCases }    from '../hooks/useCases';

/* Helpers */
import useDebounce from '../hooks/useDebounce';
import { space }   from '../theme';

export default function CasesScreen() {
  /* favourite-star */
  const [isFav, setIsFav] = useState(false);

  /* segmented toggle: 'upcoming' | 'all' */
  const [mode, setMode] = useState('upcoming');

  /* search bar */
  const [term, setTerm] = useState('');
  const debounced = useDebounce(term, 300);

  /* fetch rows from Supabase */
  const { rows, loading, error } = useCases(mode, debounced);

  /* toggle config (badge counts placeholder until API delivers them) */
  const segments = [
    { id: 'upcoming', label: 'Upcoming',  badge: 0 },
    { id: 'all',      label: 'All Cases', badge: 0 },
  ];

  return (
    <>
      {/* ───────── Header ───────── */}
      <TopNav
        title="Case List"
        showBack
        isFavourite={isFav}
        onToggleFavourite={() => setIsFav(f => !f)}
      />

      {/* ───────── Controls ───────── */}
      <div style={{ padding: `0 ${space.md}` }}>
        <SearchBar value={term} onSearch={setTerm} />

        <div style={{ marginTop: space.sm }}>
          <SegmentedToggle
            segments={segments}
            selectedId={mode}
            onSelect={id => setMode(id)}
          />
        </div>
      </div>

      {/* ───────── Main content ───────── */}
      <main
        className="page"
        style={{
          padding: space.md,
          minHeight: 'calc(100vh - 60px - var(--space-md))',
          overflowY: 'auto',
        }}
      >
        {/* loading skeletons */}
        {loading && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i}>
                <CaseSkeletonRow />
              </li>
            ))}
          </ul>
        )}

        {/* error state */}
        {error && (
          <p style={{ color: 'red', textAlign: 'center' }}>
            {error.message}
          </p>
        )}

        {/* empty state */}
        {!loading && rows.length === 0 && !error && (
          <EmptyState illustration="/img/no-data.svg">
            No cases match your search.
          </EmptyState>
        )}

        {/* populated list */}
        {!loading && rows.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
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
