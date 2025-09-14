// src/hooks/useDailyPoints.js
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

/**
 * Returns { points, loading, error }
 * Expects a `daily_points` view/table with columns:
 *   - user_id (uuid)
 *   - date    (date)
 *   - points  (int)
 */
export function useDailyPoints(userId) {
  const [points,  setPoints]  = useState(0);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!userId) { setLoading(false); return; }

    async function fetchPoints() {
      const today = new Date().toISOString().slice(0, 10); // “YYYY-MM-DD”
      const { data, error } = await supabase
        .from('daily_points')
        .select('points')
        .eq('user_id', userId)
        .eq('date', today)
        .single();

      if (error) setError(error);
      else setPoints(data?.points ?? 0);

      setLoading(false);
    }

    fetchPoints();
  }, [userId]);

  return { points, loading, error };
}
