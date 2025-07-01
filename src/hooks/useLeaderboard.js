// src/hooks/useLeaderboard.js
import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../supabaseClient';   // adjust path if yours lives elsewhere

/**
 * Fetches leaderboard rows from Supabase.
 *
 * @param {'overall' | 'league'} mode
 * @param {number}               limit
 */
export function useLeaderboard(mode = 'overall', limit = 20) {
  const [rows,    setRows]    = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  const fetchRows = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      if (mode === 'overall') {
        const { data, error } = await supabase
          .from('user')                                // exact table name
          .select('username, avatar_url, points')
          .order('points', { ascending: false })
          .limit(limit);

        if (error) throw error;

        setRows(
          data.map((row, i) => ({
            rank:   i + 1,
            name:   row.username,
            points: row.points,
            avatarUrl: row.avatar_url,
          }))
        );
      } else {
        const { data, error } = await supabase
          .from('league')
          .select('name, league_points')
          .order('league_points', { ascending: false })
          .limit(limit);

        if (error) throw error;

        setRows(
          data.map((row, i) => ({
            rank:   i + 1,
            name:   row.name,
            points: row.league_points,
            avatarUrl: `/img/league-${row.name}.png`,
          }))
        );
      }
    } catch (err) {
      console.error('Supabase leaderboard error:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [mode, limit]);

  /* (re)run whenever mode changes */
  useEffect(() => { fetchRows(); }, [fetchRows]);

  return { rows, loading, error, refetch: fetchRows };
}
