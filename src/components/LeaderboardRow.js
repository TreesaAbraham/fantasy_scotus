import React from 'react';
import '../scotus.css'; // Import your styles

/**
 * One entry in a leaderboard list.
 *
 * @param {number|string} rank      – 1-based rank (medal colours for top 3)
 * @param {string}        name      – display name (long names are ellipsised)
 * @param {number}        points    – total points
 * @param {string}        avatarUrl – 40 × 40 img src
 */
export default function LeaderboardRow({ rank, name, points, avatarUrl }) {
  /* medal colours for 1–3 */
  const rankClass =
    rank === 1
      ? ' gold'
      : rank === 2
      ? ' silver'
      : rank === 3
      ? ' bronze'
      : '';

  return (
    <div className="lb-row">
      {/* rank chip */}
      <span className={'lb-row__rank' + rankClass}>{rank}</span>

      {/* avatar */}
      <img
        src={avatarUrl}
        alt=""
        className="lb-row__avatar"
        width={40}
        height={40}
        loading="lazy"
      />

      {/* name (flex-grow so it truncates, not the points) */}
      <span className="lb-row__name" title={name}>
        {name}
      </span>

      {/* points */}
      <span className="lb-row__points">{points.toLocaleString()}</span>
    </div>
  );
}
