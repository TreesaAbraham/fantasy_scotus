// src/pages/PredictionsScreen.js
import React from 'react';
import { useParams } from 'react-router-dom';   // assume route like /predictions/:caseId
import CaseHeader from '../components/CaseHeader';      // ✅ correct
import '../scotus.css';

/**
 * PredictionsScreen
 * -----------------
 * Displays all case-level info plus the user-editable prediction widgets.
 * Each block below will be replaced by the actual components you’ll build
 * in PR3-PR6.
 */
export default function PredictionsScreen() {
  const { caseId: _ } = useParams();  // eslint sees it as used
  // e.g. "21-123"
  // TODO: fetch real case data by caseId (Supabase / Oyez)
  const mock = {
    title:  'Smith v. United States',
    docket: '21-123',
    term:   '2024-25',
    questionPresented:
      'Whether a defendant’s prior juvenile adjudication qualifies as a “violent felony” under the Armed Career Criminal Act.',
  };

  return (
    <div className="safe-area page scroll-y">
      {/* ---------- PR2 content ---------- */}
      <CaseHeader
        title={mock.title}
        docket={mock.docket}
        term={mock.term}
      />

      {/* ---------- PR3 stub ---------- */}
      <section className="section">
        <h2 className="h3">Question Presented</h2>
        <p>{mock.questionPresented}</p>
      </section>

      {/* ---------- PR4 stub ---------- */}
      <section className="section">
        {/* TODO: <PredictionCard type="crowd"   … /> */}
        {/* TODO: <PredictionCard type="final"   … /> */}
      </section>

      {/* ---------- PR5 stub ---------- */}
      <section className="section">
        {/* TODO: map JUSTICES → <JusticeRow /> */}
      </section>

      {/* ---------- PR6 stub ---------- */}
      <button className="primary-btn" disabled>
        Save
      </button>
    </div>
  );
}
