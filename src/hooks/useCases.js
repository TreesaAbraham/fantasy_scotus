import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../supabaseClient';

/**
 * Fetch cases.
 * @param {'upcoming'|'all'} status
 * @param {string} searchTerm
 * @returns { rows, loading, error, refetch }
 */
export function useCases(status = 'upcoming', searchTerm = '', limit = 50) {
  const [rows,    setRows]    = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  const fetchRows = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const query = supabase
        .from('cases')                       // adjust table name if needed
        .select('id, title, total_points, photo_url, status')
        .order('total_points', { ascending: false })
        .limit(limit);

      /* apply filters */
      if (status === 'upcoming') query.eq('status', 'upcoming');
      if (searchTerm.trim())    query.ilike('title', `%${searchTerm.trim()}%`);

      const { data, error } = await query;

      if (error) throw error;

      /* map to <CaseRow> props */
      setRows(
        data.map((row, i) => ({
          rank:      i + 1,
          id:        row.id,
          name:      row.title,
          points:    row.total_points,
          avatarUrl: row.icon_url || '/img/case-placeholder.png',
        }))
      );
    } catch (err) {
      console.error('Supabase cases error:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [status, searchTerm, limit]);

  /* auto-fetch on mount & when deps change */
  useEffect(() => { fetchRows(); }, [fetchRows]);

  return { rows, loading, error, refetch: fetchRows };
}
