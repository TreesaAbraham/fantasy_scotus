import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../scotus.css';

/* UI */
import TopNav from '../components/TopNav';
import QuestionPresented from '../components/QuestionPresented';
import PredictionCard from '../components/PredictionCard';
import JusticePredictions from '../components/JusticePredictions';
import Toast from '../components/Toast';

/* Data & hooks */
import { supabase } from '../supabaseClient';
import { usePredictionSave } from '../hooks/usePredictionSave';
import { useAuth } from '../hooks/useAuth';

/* Tokens */
import { space } from '../theme';

/* ---------- Config: tweak if your schema differs ---------- */
const CASE_TABLE = 'cases';
const CASE_ID_COL = 'id';

// Map a raw DB row to the shape the UI expects, with safe fallbacks.
function mapCaseRow(row) {
  if (!row) return null;
  return {
    id: row[CASE_ID_COL],
    case_number: row.case_number ?? row.docket_number ?? row.docket ?? '—',
    case_name: row.case_name ?? row.name ?? row.title ?? 'Unknown case',
    date_argued: row.date_argued ?? row.argued_on ?? row.heard_on ?? '—',
    question_presented:
      row.question_presented_html ??
      row.question_presented ??
      row.question ??
      null,
    // Final decision (optional columns)
    final_outcome: row.final_outcome ?? row.decision_outcome ?? null, // 'affirm'|'reverse'|null
    final_split: row.final_split ?? row.vote_split ?? null,           // e.g. "6–3"
    decided_date: row.decided_date ?? row.decision_date ?? null,
  };
}

/* ------------ Child that owns the save hook --------------- */
function PredictionBody({ userId, caseData, crowdStats, initialOverall, initialPerJustice }) {
  const {
    overall, setOverall,
    perJustice, setPerJustice,
    saving, dirty, save,
  } = usePredictionSave({
    userId,
    caseId: caseData.id,
    initialOverall,
    initialPerJustice,
  });

  const [toast, setToast] = useState({ show: false, message: '', kind: 'success' });

  const handleSave = async () => {
    const { error } = await save();
    if (error) {
      setToast({ show: true, message: 'Save failed. Please try again.', kind: 'error' });
    } else {
      setToast({ show: true, message: 'Prediction saved.', kind: 'success' });
    }
    setTimeout(() => setToast(t => ({ ...t, show: false })), 1600);
  };

  // Derive card values (crowd + final)
  const crowdAffirm = crowdStats?.affirmPct ?? 0;
  const crowdReverse = Math.max(0, 100 - crowdAffirm);
  const crowdN = crowdStats?.n ?? 0;
  const crowdSplit = crowdStats?.medianSplit ?? '—';

  const finalAffirm = caseData.final_outcome === 'affirm' ? 100 : 0;
  const finalReverse = caseData.final_outcome === 'reverse' ? 100 : 0;

  return (
    <>
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
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>
              {caseData.case_name}
            </h2>
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

        {/* Summary cards */}
        <section className="grid" style={{ display: 'grid', gap: 12 }}>
          <PredictionCard
            title="Crowd Prediction"
            affirmPct={crowdAffirm}
            reversePct={crowdReverse}
            chips={[`Median split ${crowdSplit}`, `N=${crowdN} predictions`]}
            hint="Based on community submissions"
          />
          <PredictionCard
            title="Final Decision"
            affirmPct={finalAffirm}
            reversePct={finalReverse}
            chips={[
              caseData.final_split ? `Decided ${caseData.final_split}` : 'Not decided',
              caseData.decided_date ?? '—',
            ]}
            hint="Published by the Court"
          />
        </section>

        {/* Per-Justice votes */}
        <section className="card" style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ margin: 0 }}>Per-Justice Votes</h3>
          <JusticePredictions
            value={perJustice}
            onChange={(_justiceId, _vote, nextState) => {
              setPerJustice(nextState);
            }}
          />
        </section>

        {/* Overall controls */}
        <section className="card" style={{ display: 'grid', gap: 14 }}>
          <div className="row">
            <label className="row__label">Outcome</label>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                className={`btn ${overall.outcome === 'affirm' ? 'btn--primary' : ''}`}
                type="button"
                onClick={() => setOverall(o => ({ ...o, outcome: 'affirm' }))}
              >
                Affirm
              </button>
              <button
                className={`btn ${overall.outcome === 'reverse' ? 'btn--primary' : ''}`}
                type="button"
                onClick={() => setOverall(o => ({ ...o, outcome: 'reverse' }))}
              >
                Reverse
              </button>
            </div>
          </div>

          <div className="row">
            <label className="row__label">
              Confidence <span className="muted">{overall.confidence ?? 0}%</span>
            </label>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={overall.confidence ?? 0}
              onChange={(e) => {
                const v = Number(e.target.value);
                setOverall(o => ({ ...o, confidence: v }));
              }}
              className="pred__slider"
            />
          </div>

          <div className="row">
            <label className="row__label">Predicted split</label>
            <select
              className="pred__select"
              value={overall.split ?? '5-4'}
              onChange={(e) => setOverall(o => ({ ...o, split: e.target.value }))}
            >
              {['9-0','8-1','7-2','6-3','5-4'].map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="row row--end">
            <button
              className="btn btn--primary"
              onClick={handleSave}
              type="button"
              disabled={saving || !dirty || !userId}
              title={!userId ? 'Log in to save' : (!dirty ? 'No changes to save' : '')}
            >
              {saving ? 'Saving…' : 'Save prediction'}
            </button>
          </div>
        </section>
      </main>

      <Toast show={toast.show} message={toast.message} kind={toast.kind} />
    </>
  );
}

export default function PredictionsScreen() {
  const session = useAuth();
  const userId = session?.user?.id ?? null;
  const { caseId: paramCaseId } = useParams();

  const [caseRow, setCaseRow] = useState(null);
  const [loadingCase, setLoadingCase] = useState(true);
  const [caseError, setCaseError] = useState(null);

  const [initialOverall, setInitialOverall] = useState({ outcome: null, confidence: null, split: null });
  const [initialPerJustice, setInitialPerJustice] = useState({});

  const [crowd, setCrowd] = useState({ affirmPct: 0, n: 0, medianSplit: '—' });

  // Fetch the case row
  useEffect(() => {
    let cancelled = false;

    async function loadCase() {
      setLoadingCase(true);
      setCaseError(null);

      try {
        let query = supabase.from(CASE_TABLE).select('*');
        if (paramCaseId) {
          query = query.eq(CASE_ID_COL, paramCaseId).maybeSingle();
        } else {
          query = query
            .order('date_argued', { ascending: false, nullsFirst: false })
            .order('created_at', { ascending: false, nullsFirst: false })
            .limit(1)
            .maybeSingle();
        }
        const { data, error } = await query;
        if (cancelled) return;
        if (error) throw error;
        setCaseRow(data);
      } catch (e) {
        if (!cancelled) setCaseError(e);
      } finally {
        if (!cancelled) setLoadingCase(false);
      }
    }

    loadCase();
    return () => { cancelled = true; };
  }, [paramCaseId]);

  // Prefill user prediction and crowd aggregates
  useEffect(() => {
    let cancelled = false;
    const row = mapCaseRow(caseRow);
    if (!row?.id) return;

    async function loadUserPrediction() {
      try {
        const { data, error } = await supabase
          .from('predictions')
          .select('*')
          .eq('user_id', userId || '00000000-0000-0000-0000-000000000000')
          .eq('case_id', row.id)
          .maybeSingle();

        if (cancelled) return;
        if (error && error.code !== 'PGRST116') throw error; // ignore "no rows"

        setInitialOverall({
          outcome: data?.outcome ?? null,
          confidence: data?.confidence ?? null,
          split: data?.split ?? null,
        });
        setInitialPerJustice(data?.justice_votes ?? {});
      } catch (e) {
        console.warn('Failed to prefill prediction', e);
      }
    }

    async function loadCrowd() {
      try {
        const totalReq = await supabase
          .from('predictions')
          .select('*', { count: 'exact', head: true })
          .eq('case_id', row.id);

        const affirmReq = await supabase
          .from('predictions')
          .select('*', { count: 'exact', head: true })
          .eq('case_id', row.id)
          .eq('outcome', 'affirm');

        const total = totalReq.count ?? 0;
        const affirm = affirmReq.count ?? 0;
        const affirmPct = total > 0 ? Math.round((affirm / total) * 100) : 0;

        if (!cancelled) {
          setCrowd({ affirmPct, n: total, medianSplit: '—' });
        }
      } catch (e) {
        console.warn('Failed to load crowd stats', e);
      }
    }

    loadUserPrediction();
    loadCrowd();

    return () => { cancelled = true; };
  }, [caseRow, userId]);

  const caseData = useMemo(() => mapCaseRow(caseRow), [caseRow]);

  return (
    <>
      <TopNav title="Predictions" showBack />

      {loadingCase && (
        <main className="page" style={{ padding: space.md }}>
          <div className="card">Loading case…</div>
        </main>
      )}

      {!loadingCase && caseError && (
        <main className="page" style={{ padding: space.md }}>
          <div className="card" style={{ color: 'red' }}>
            {caseError.message || 'Failed to load case.'}
          </div>
        </main>
      )}

      {!loadingCase && !caseError && caseData && (
        <PredictionBody
          userId={userId}
          caseData={caseData}
          crowdStats={crowd}
          initialOverall={initialOverall}
          initialPerJustice={initialPerJustice}
        />
      )}
    </>
  );
}
