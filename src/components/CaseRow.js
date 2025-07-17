import React from "react";
import { FaGavel } from "react-icons/fa";
import '../scotus.css';

/**
 * CaseRow
 * ──────────────────────────────────────────
 * Props
 *   rank        number  (1-based)
 *   name        string  case title
 *   points      number  total points for the user (or case score)
 *   onClick     func    optional row-click handler
 */
export default function CaseRow({ rank, name, points, onClick }) {
  return (
    <button type="button" className="case-row" onClick={onClick}>
      {/* Rank chip */}
      <span className="rank-chip">{rank}</span>

      {/* Icon */}
      <FaGavel className="case-icon" size={18} aria-hidden="true" />

      {/* Case title (flex-grow so it truncates w/ ellipsis) */}
      <span className="case-title" title={name}>
        {name}
      </span>

      {/* Points (right-aligned) */}
      <span className="case-points">{points}</span>
    </button>
  );
}
