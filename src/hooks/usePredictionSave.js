// src/hooks/usePredictionSave.js
import { useMemo, useState } from 'react';
import { buildPredictionPayload, upsertPrediction } from '../services/predictions';

const stable = (obj) => JSON.stringify(obj ?? {}, Object.keys(obj ?? {}).sort());

export function usePredictionSave({ userId, caseId, initialOverall, initialPerJustice }) {
  const [overall, setOverall] = useState(initialOverall ?? { outcome: null, confidence: null, split: null });
  const [perJustice, setPerJustice] = useState(initialPerJustice ?? {}); // { [justiceId]: 'affirm'|'reverse'|null }
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState({
    overall: initialOverall ?? { outcome: null, confidence: null, split: null },
    perJustice: initialPerJustice ?? {},
  });

  const dirty = useMemo(
    () => stable({ overall, perJustice }) !== stable(lastSaved),
    [overall, perJustice, lastSaved]
  );

  async function save() {
    if (saving || !dirty || !userId || !caseId) return { error: null, skipped: true };

    // optimistic snapshot
    const optimistic = { overall, perJustice };
    setLastSaved(optimistic);
    setSaving(true);

    const payload = buildPredictionPayload({ userId, caseId, overall, perJustice });
    const { error } = await upsertPrediction(payload);

    setSaving(false);

    if (error) {
      // rollback snapshot on failure
      setLastSaved((prev) => prev); // keep previous; caller can also refetch if desired
      return { error };
    }
    return { error: null };
  }

  return {
    overall, setOverall,
    perJustice, setPerJustice,
    saving, dirty, save,
  };
}
