// src/pages/PredictionsScreen.js
import React, { useMemo, useState } from 'react';
import '../scotus.css';

/* UI */
import TopNav from '../components/TopNav';
import QuestionPresented from '../components/QuestionPresented';
import PredictionCard from '../components/PredictionCard';

/* Tokens */
import { space } from '../theme';

export default function PredictionsScreen() {
  // TODO: replace this with a real fetch from Supabase (cases table)
  const caseData = useMemo(() => ({
    id: 'demo-1',
    case_number: '23-101',
    case_name: 'Smith v. United States',
    date_argued: '2025-02-12',
    status: 'undecided', // 'decided' | 'undecided'
    question_presented:
      `<p>Whether the Court should <em>clarify</em> the standard for X under Y,
      where lower courts are divided…</p>`,
    // example crowd aggregate (replace with real aggregates)
    crowd_affirm_pct: 62,
    crowd_reverse_pct: 38,
    crowd_meta: { median_split: '5–4', n: 123 },
    // example final decision (0/100 until decided)
    final_affirm_pct: 0,
    final_reverse_pct: 0,
    final_meta: { split: '—', date: '—' },
  }), []);

  // (optional) your personal prediction state — keep if you built PR2/PR3 controls earlier
  const [outcome, setOutcome] = useState('affirm'); // 'affirm' | 'reverse'
  const [confidence, setConfidence] = useState(60);
  const [split, setSplit] = useState('5-4');

  const savePrediction = () => {
    // TODO: supabase.from('prediction').upsert({ case_id: caseData.id, outcome, confidence, split })
    console.log('save prediction', { case_id: caseData.id, outcome, confidence, split });
    alert('Saved (stub) — wire to Supabase next.');
  };

  return (
    <>
      <TopNav title="Predictions" showBack />

      <main
        className="page"
        style={{
          padding: space.md,
          paddingBottom: `calc(${space.lg} + var(--nav-height, 56px))`,
          display: 'grid',
          gap: space.md,
        }}
      >
        {/* Case header + Question Presented */}
        <section className="card">
          <div style={{ marginBottom: 10 }}>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>{caseData.case_name}</h2>
            <div style={{ color: '#666', fontSize: 13 }}>
              No. {caseData.case_number} • Argued {caseData.date_argued}
            </div>
          </div>

          <QuestionPresented
            content={caseData.question_presented}
            isHtml
            clampLines={8}
          />
        </section>

        {/* PR4: Prediction summary cards */}
        <section className="grid" style={{ display: 'grid', gap: 12 }}>
          <PredictionCard
            title="Crowd Prediction"
            affirmPct={caseData.crowd_affirm_pct ?? 0}
            reversePct={caseData.crowd_reverse_pct ?? 0}
            chips={[
              `Median split ${caseData.crowd_meta?.median_split ?? '—'}`,
              `N=${caseData.crowd_meta?.n ?? 0} predictions`,
            ]}
            hint="Based on community submissions"
          />

          <PredictionCard
            title="Final Decision"
            affirmPct={caseData.final_affirm_pct ?? 0}
            reversePct={caseData.final_reverse_pct ?? 0}
            chips={[
              `Decided ${caseData.final_meta?.split ?? '—'}`,
              caseData.final_meta?.date ?? '—',
            ]}
            hint="Published by the Court"
          />
        </section>

        {/* (optional) your personal prediction controls — keep if you already built them */}
        <section className="card" style={{ display: 'grid', gap: 14 }}>
          <div className="row">
            <label className="row__label">Outcome</label>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                className={`btn ${outcome === 'affirm' ? 'btn--primary' : ''}`}
                type="button"
                onClick={() => setOutcome('affirm')}
              >
                Affirm
              </button>
              <button
                className={`btn ${outcome === 'reverse' ? 'btn--primary' : ''}`}
                type="button"
                onClick={() => setOutcome('reverse')}
              >
                Reverse
              </button>
            </div>
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
              {['9-0','8-1','7-2','6-3','5-4'].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="row row--end">
            <button className="btn btn--primary" onClick={savePrediction} type="button">
              Save prediction
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
