import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../supabaseClient';

/**
 * Columns used: id, title, photo_url, total_points, casestatus
 */
export function useCases(status = 'upcoming', searchTerm = '', limit = 50) {
  const [rows, setRows]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const fetchRows = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      let query = supabase
        .from('cases') // change to 'case' if needed
        .select('id, title, photo_url, total_points, casestatus')
        .order('total_points', { ascending: false })
        .limit(limit);

      // ✅ Upcoming filter on TEXT column
      if (status === 'upcoming') {
        // If your DB has 'Upcoming' capitalized, change the string below to match exactly
        query = query.eq('casestatus', 'upcoming');
      }

      const term = searchTerm.trim();
      if (term) {
        query = query.ilike('title', `%${term}%`);
      }

      const { data, error } = await query;
      if (error) throw error;

      const mapped = (data ?? []).map((row, i) => ({
        rank: i + 1,
        id: row.id,
        name: row.title ?? 'Unknown case',
        points: typeof row.total_points === 'number' ? row.total_points : 0,
        avatarUrl: row.photo_url || '/img/case-placeholder.png',
      }));

      setRows(mapped);
    } catch (err) {
      console.error('Supabase cases error:', err?.message || err, err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [status, searchTerm, limit]);

  useEffect(() => { fetchRows(); }, [fetchRows]);

  return { rows, loading, error, refetch: fetchRows };
}
