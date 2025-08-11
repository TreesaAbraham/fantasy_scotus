// src/components/PredictionCard.js
import React from 'react';
import '../scotus.css';

/**
 * <PredictionCard />
 * - Reusable card that shows two progress rows (Affirm / Reverse) + meta chips
 *
 * Props:
 *  - title: string
 *  - affirmPct: number (0–100)
 *  - reversePct: number (0–100)
 *  - chips?: string[]          e.g., ["5–4", "Confidence 72%"]
 *  - hint?: string             small, muted text under title
 */
export default function PredictionCard({
  title,
  affirmPct = 0,
  reversePct = 0,
  chips = [],
  hint,
}) {
  const clamp = (n) => Math.max(0, Math.min(100, Math.round(n || 0)));

  const a = clamp(affirmPct);
  const r = clamp(reversePct);

  return (
    <section className="pcard" aria-labelledby={`${title}-hdr`}>
      <header className="pcard__header">
        <h3 id={`${title}-hdr`} className="pcard__title">{title}</h3>
        {hint && <div className="pcard__hint">{hint}</div>}
      </header>

      <div className="pcard__rows">
        <ProgressRow label="Affirm" percent={a} color="affirm" />
        <ProgressRow label="Reverse" percent={r} color="reverse" />
      </div>

      {chips.length > 0 && (
        <div className="pcard__chips">
          {chips.map((c, i) => (
            <span className="chip" key={i}>{c}</span>
          ))}
        </div>
      )}
    </section>
  );
}

function ProgressRow({ label, percent, color }) {
  return (
    <div className="pcard__row">
      <div className="pcard__rowhead">
        <span className="pcard__label">{label}</span>
        <span className="pcard__val">{percent}%</span>
      </div>

      <div
        className={`pcard__bar pcard__bar--${color}`}
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <div className="pcard__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
