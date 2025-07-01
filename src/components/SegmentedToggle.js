import React from 'react';
import '../scotus.css'; // Import your styles

/**
 * Generic segmented control.
 *
 * @param {Array<{
 *   id:        string,
 *   label:     string,
 *   badge?:    number | string
 * }>}     segments
 * @param {string}   selectedId
 * @param {Function} onSelect      receives the id that was clicked
 */
export default function SegmentedToggle({ segments, selectedId, onSelect }) {
  return (
    <div className="segmented">
      {segments.map(({ id, label, badge }) => {
        const isActive = id === selectedId;
        return (
          <button
            key={id}
            className={'segmented__btn' + (isActive ? ' segmented__btn--active' : '')}
            onClick={() => onSelect(id)}
            aria-pressed={isActive}
          >
            {label}
            {badge !== undefined && (
              <span className="segmented__badge">{badge}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
