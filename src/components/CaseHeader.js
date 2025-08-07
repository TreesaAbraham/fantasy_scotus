import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../scotus.css';

/**
 * Props:
 * ─ title   – full case name (string, required)
 * ─ docket  – docket number  (string, required)
 * ─ term    – term year      (string, required)
 */
export default function CaseHeader({ title, docket, term }) {
  const nav = useNavigate();

  return (
    <header className="case-header">
      <button
        className="case-header__back"
        onClick={() => nav(-1)}
        aria-label="Back"
      >
        <FaArrowLeft />
      </button>

      <h1 className="case-header__title" title={title}>
        {title}
      </h1>

      <div className="case-header__chips">
        <span className="chip">{docket}</span>
        <span className="chip">{term}</span>
      </div>
    </header>
  );
}
