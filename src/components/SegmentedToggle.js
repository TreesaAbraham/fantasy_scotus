import React from "react";
import "../scotus.css";

/**
 * Generic pill-style segmented control.
 *
 * Props
 * ──────────────────────────────────────────
 * segments   array  [{ id, label, badge? }]
 * selected   string currently-selected id
 * onSelect   func   (id) => void
 *
 * Example
 * ──────────────────────────────────────────
 * <SegmentedToggle
 *   segments={[
 *     { id: "upcoming", label: "Upcoming", badge: 4 },
 *     { id: "all",      label: "All Cases", badge: 23 },
 *   ]}
 *   selected="upcoming"
 *   onSelect={(id) => setSegment(id)}
 * />
 */
export default function SegmentedToggle({
  segments = [],
  selected,
  onSelect,
}) {
  return (
    <div className="segmented-toggle">
      {segments.map(({ id, label, badge }) => {
        const active = id === selected;
        return (
          <button
            key={id}
            type="button"
            className={`segment${active ? " active" : ""}`}
            onClick={() => onSelect?.(id)}
          >
            <span>{label}</span>

            {/* Optional badge */}
            {badge > 0 && <span className="badge">{badge}</span>}
          </button>
        );
      })}
    </div>
  );
}
