// src/hooks/useLeagues.js
import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../supabaseClient';

/**
 * Fetch leagues list.
 * @param {'all' | 'law'} type
 * @returns { rows, loading, error, refetch }
 */
export function useLeagues(type = 'all', limit = 50) {
  const [rows,    setRows]    = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  const fetchRows = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const query = supabase
        .from('league')                               // adjust table name if needed
        .select('id, name, league_points, icon_url')
        .order('league_points', { ascending: false })
        .limit(limit);

      if (type === 'law') query.eq('category', 'law-school');

      const { data, error } = await query;

      if (error) throw error;

      setRows(data.map((row, i) => ({
        rank:   i + 1,
        id:     row.id,
        name:   row.name,
        points: row.league_points,
        avatarUrl: row.icon_url || `/img/league-${row.id}.png`,
      })));
    } catch (err) {
      console.error('Supabase leagues error:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [type, limit]);

  /* auto-fetch on mount & when `type` changes */
  useEffect(() => { fetchRows(); }, [fetchRows]);

  return { rows, loading, error, refetch: fetchRows };
}