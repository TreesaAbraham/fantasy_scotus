// src/components/CaseRow.js
import React from 'react';
import { FaGavel } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import '../scotus.css';

/**
 * CaseRow – single row entry for the cases list
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
  const prettyPoints =
    typeof points === 'number' ? points.toLocaleString() : String(points ?? '0');

  return (
    <button type="button" className="case-row" onClick={onClick}>
      <span className="case-rank">{rank}</span>

      {avatarUrl ? (
        <img src={avatarUrl} alt="" className="case-thumb" />
      ) : (
        <FaGavel className="case-icon" aria-hidden="true" />
      )}

      <span className="case-title" title={name}>
        {name}
      </span>

      <span className="case-points">{prettyPoints}</span>

      {downloadUrl && (
        <a
          href={downloadUrl}
          download
          onClick={(e) => e.stopPropagation()} /* keep row click intact */
          className="case-download"
          aria-label="Download case asset"
          title="Download"
        >
          <FiDownload aria-hidden="true" />
        </a>
      )}
    </button>
  );
}
