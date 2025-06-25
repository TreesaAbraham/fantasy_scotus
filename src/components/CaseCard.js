// src/components/CaseCard.js
import React from 'react';
import '../scotus.css';

const fallbackImg = 'https://placehold.co/240x120?text=SCOTUS';

export default function CaseCard({
  id,
  title,
  summary,
  illustration,          // not yet in DB
  onSelect,
}) {
  return (
    <button className="case-card" onClick={() => onSelect?.(id)}>
      <img
        src={illustration || fallbackImg}
        alt=""
        aria-hidden="true"
        className="case-card__img"
      />
      <h3 className="case-card__title">{title}</h3>
      <p  className="case-card__summary">{summary}</p>
    </button>
  );
}
