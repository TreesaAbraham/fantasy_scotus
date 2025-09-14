import React from "react";
import "../scotus.css";

/**
 * Generic pill-style segmented control.
 *
 * Props
 * ──────────────────────────────────────────
 * segments   array  [{ id, label, badge? }]
 * selected   string currently-selected id
 * selectedId string alias (back-compat)
 * onSelect   func   (id) => void
 */
export default function SegmentedToggle({
  segments = [],
  selected,
  selectedId, // accept legacy prop from pages
  onSelect,
}) {
  const current = selected ?? selectedId;

  return (
    <div className="segmented-toggle">
      {segments.map(({ id, label, badge }) => {
        const active = id === current;
        return (
          <button
            key={id}
            type="button"
            className={`segment${active ? " active" : ""}`}
            onClick={() => onSelect?.(id)}
          >
            <span>{label}</span>
            {badge > 0 && <span className="badge">{badge}</span>}
          </button>
        );
      })}
    </div>
  );
}
