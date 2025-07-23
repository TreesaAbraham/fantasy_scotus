import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../supabaseClient';

/**
 * Fetch cases.
 * @param {'upcoming'|'all'} status
 * @param {string} searchTerm
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
        .from('cases')
        .select('id, title, total_points, photo_url, casestatus') // ← match column names
        .order('total_points', { ascending: false })
        .limit(limit);

      /* filters */
      if (status === 'upcoming') query.eq('casestatus', 'upcoming'); // ← use correct column
      if (searchTerm.trim())     query.ilike('title', `%${searchTerm.trim()}%`);

      const { data, error } = await query;
      if (error) throw error;

      setRows(
        data.map((row, i) => ({
          rank:   i + 1,
          id:     row.id,
          name:   row.title,
          points: row.total_points,
          avatarUrl: row.photo_url || '/img/case-placeholder.png', // ← use photo_url
        }))
      );
    } catch (err) {
      console.error('Supabase cases error:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [status, searchTerm, limit]);

  useEffect(() => { fetchRows(); }, [fetchRows]);

  return { rows, loading, error, refetch: fetchRows };
}
