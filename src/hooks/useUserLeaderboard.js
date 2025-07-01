// src/hooks/useUserLeaderboard.js
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

/**
 * Return the top N users ordered by total points.
 * Assumes the `user` table has a single up‑to‑date row per user with a
 * cumulative `points` column. Adjust limit as needed.
 */
export function useUserLeaderboard(limit = 20) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);

      const { data, error } = await supabase
        .from('user')
        .select('user_id, username, avatar_url, points')
        .order('points', { ascending: false })
        .limit(limit);

      if (!cancelled && !error) {
        setRows(
          data.map((row, i) => ({
            rank: i + 1,
            name: row.username ?? 'Anon',
            points: row.points,
            avatarUrl: row.avatar_url,
          }))
        );
      }
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [limit]);

  return { rows, loading };
}
