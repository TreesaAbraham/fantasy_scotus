// src/components/CaseRow.js
import React from 'react';
import { FaGavel }    from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import '../scotus.css';

/**
 * CaseRow – presentational shell (styles live in CSS)
 *
 * Props
 *  rank        number
 *  name        string
 *  points      number
 *  avatarUrl   string  (optional thumbnail)
 *  downloadUrl string  (optional original photo)
 *  onClick     func    (optional row click handler)
 */
export default function CaseRow({
  rank,
  name,
  points,
  avatarUrl,
  downloadUrl,
  onClick,
}) {
  return (
    <button
      type="button"
      className="case-row"
      onClick={onClick}
    >
      {/* rank chip */}
      <span className="case-rank">{rank}</span>

      {/* thumbnail or fallback icon */}
      {avatarUrl ? (
        <img src={avatarUrl} alt="" className="case-thumb" />
      ) : (
        <FaGavel className="case-icon" aria-hidden="true" />
      )}

      {/* title */}
      <span className="case-title" title={name}>
        {name}
      </span>

      {/* points */}
      <span className="case-points">{points}</span>

      {/* download button */}
      {downloadUrl && (
        <a
          href={downloadUrl}
          download
          onClick={e => e.stopPropagation()}  /* keep row click intact */
          className="case-download"
          aria-label="Download photo"
        >
          <FiDownload aria-hidden="true" />
        </a>
      )}
    </button>
  );
}

