// src/components/LeagueRow.js
import React from 'react';
import '../scotus.css';   // global styles that include our row CSS

/**
 * One row in the Leagues screen
 *
 * @param {number|string} rank      – 1-based rank (medal colours for top 3)
 * @param {string}        name      – league name (ellipsised if long)
 * @param {number}        points    – total points the league has earned
 * @param {string}        avatarUrl – circular icon (40×40). TODO: switch to
 *                                    league-specific SVG when available.
 */
export default function LeagueRow({ rank, name, points, avatarUrl }) {
  /* medal background for 1–3 */
  const medal =
    rank === 1 ? ' gold' :
    rank === 2 ? ' silver' :
    rank === 3 ? ' bronze' : '';

  return (
    <div className="lg-row">
      {/* rank chip */}
      <span className={'lg-row__rank' + medal}>{rank}</span>

      {/* avatar/icon */}
      <img
        src={avatarUrl}
        alt=""
        className="lg-row__avatar"
        width={40}
        height={40}
        loading="lazy"
      />

      {/* league name (truncates) */}
      <span className="lg-row__name" title={name}>
        {name}
      </span>

      {/* total points */}
      <span className="lg-row__points">{points.toLocaleString()}</span>
    </div>
  );
}
