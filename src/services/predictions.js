// src/services/predictions.js
import { supabase } from '../supabaseClient';

/**
 * Normalize UI state → DB row shape
 * predictions table suggested columns:
 *  user_id (uuid), case_id (text/uuid), outcome (text), confidence (int),
 *  split (text), justice_votes (jsonb), updated_at (timestamptz)
 */
export function buildPredictionPayload({ userId, caseId, overall, perJustice }) {
  const { outcome = null, confidence = null, split = null } = overall || {};

  // Only keep set votes (drop nulls)
  const justice_votes = Object.fromEntries(
    Object.entries(perJustice || {}).filter(([, v]) => v)
  );

  return {
    user_id: userId ?? null,
    case_id: caseId ?? null,
    outcome,               // 'affirm' | 'reverse' | null
    confidence,            // 0..100 | null
    split,                 // e.g. '5-4' | null
    justice_votes,         // JSONB
    updated_at: new Date().toISOString(),
  };
}

export async function upsertPrediction(payload) {
  const { data, error } = await supabase
    .from('predictions')
    .upsert(payload, { onConflict: 'user_id,case_id' })
    .select()
    .maybeSingle();

  return { data, error };
}
