import React, { useMemo, useState } from 'react';
import '../scotus.css';

/* UI */
import TopNav from '../components/TopNav';
import SegmentedToggle from '../components/SegmentedToggle';
import QuestionPresented from '../components/QuestionPresented';

/* Tokens */
import { space } from '../theme';

/**
 * PredictionsScreen
 * - Shows a single current case (stubbed here) + prediction controls
 * - Wire to Supabase later where noted
 */
export default function PredictionsScreen() {
  // TODO: replace with real case data from Supabase
  const caseData = useMemo(() => ({
    id: 'demo-1',
    case_number: '23-101',
    case_name: 'Smith v. United States',
    date_argued: '2025-02-12',
    question_presented:
      `<p>Whether the Court should <em>clarify</em> the standard for X under Y,
      where lower courts are divided on …</p>`,
  }), []);

  // Prediction state
  const [outcome, setOutcome] = useState('affirm'); // 'affirm' | 'reverse'
  const [confidence, setConfidence] = useState(60); // 0–100
  const [split, setSplit] = useState('5-4');        // e.g. '5-4', '6-3', …

  const outcomeSegs = [
    { id: 'affirm',  label: 'Affirm' },
    { id: 'reverse', label: 'Reverse' },
  ];
  const splitOptions = ['9-0','8-1','7-2','6-3','5-4'];

  const canSave = !!outcome;

  const handleSave = () => {
    // TODO: write to Supabase predictions table
    // e.g. supabase.from('prediction').upsert({ case_id: caseData.id, outcome, confidence, split })
    console.log('save prediction', { case_id: caseData.id, outcome, confidence, split });
    alert('Saved (stub). Wire to Supabase next.');
  };

  return (
    <>
      <TopNav title="Predictions" />

      <main
        className="page"
        style={{
          padding: space.md,
          paddingBottom: `calc(${space.lg} + var(--nav-height, 56px))`, // leave room for bottom nav
          display: 'grid',
          gap: space.md,
        }}
      >
        {/* Case header card */}
        <section className="card">
          <div className="pred__header">
            <h2 className="pred__title">{caseData.case_name}</h2>
            <div className="pred__meta">
              No. {caseData.case_number} • Argued {caseData.date_argued}
            </div>
          </div>

          {/* Question Presented */}
          <QuestionPresented
            content={caseData.question_presented}
            isHtml
            clampLines={8}
          />
        </section>

        {/* Prediction controls */}
        <section className="card pred__controls">
          <div className="row">
            <label className="row__label">Outcome</label>
            <SegmentedToggle
              segments={outcomeSegs}
              selectedId={outcome}
              onSelect={setOutcome}
            />
          </div>

          <div className="row">
            <label className="row__label">
              Confidence <span className="muted">{confidence}%</span>
            </label>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={confidence}
              onChange={(e) => setConfidence(Number(e.target.value))}
              className="pred__slider"
            />
          </div>

          <div className="row">
            <label className="row__label">Predicted split</label>
            <select
              className="pred__select"
              value={split}
              onChange={(e) => setSplit(e.target.value)}
            >
              {splitOptions.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="row row--end">
            <button
              className="btn btn--primary"
              disabled={!canSave}
              onClick={handleSave}
              type="button"
            >
              Save prediction
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
