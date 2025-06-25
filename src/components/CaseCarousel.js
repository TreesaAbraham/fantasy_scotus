// src/components/CaseCarousel.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CaseCard from './CaseCard';
import '../scotus.css';

export default function CaseCarousel({ cases }) {
  const navigate = useNavigate();

  if (!cases?.length) {
    return (
      <p className="text-subtle" style={{ marginTop: 'var(--space-md)' }}>
        No cases to show yet.
      </p>
    );
  }

  return (
    <div className="case-carousel">
      {cases.map((c) => (
        <CaseCard
          key={c.id}
          id={c.id}
          title={c.title}
          summary={c.summary}
          onSelect={() => navigate(`/cases/${c.id}`)}
        />
      ))}
    </div>
  );
}
