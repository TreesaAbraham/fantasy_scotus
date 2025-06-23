// src/hooks/useDailyPoints.js
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

/**
 * Returns { points, loading, error }
 *
 * Assumes a `daily_points` view or table with:
 *   - user_id (uuid)
 *   - points  (integer)
 *   - date    (date, truncated at UTC midnight)
 */
export function useDailyPoints(userId) {
  const [points,  setPoints]  = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!userId) return; // not logged in yet

    async function fetchPoints() {
      const { data, error } = await supabase
        .from('daily_points')
        .select('points')
        .eq('user_id', userId)
        .eq('date', new Date().toISOString().slice(0, 10)) // “YYYY-MM-DD”
        .single();

      if (error) setError(error);
      else       setPoints(data?.points ?? 0);

      setLoading(false);
    }

    fetchPoints();
  }, [userId]);

  return { points, loading, error };
}
