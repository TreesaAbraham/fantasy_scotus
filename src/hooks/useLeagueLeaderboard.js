// src/hooks/useLeagueLeaderboard.js
import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../supabaseClient';

/**
 * Fetch and rank leagues by `league_points`.
 *
 * @param {number} limit — max number of leagues to fetch (default 10)
 * @returns {{ rows: Array<{rank:number,name:string,points:number,avatarUrl:string}>,
 *            loading: boolean,
 *            error: object|null,
 *            refetch: () => Promise<void> }}
 */
export function useLeagueLeaderboard(limit = 10) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLeagues = useCallback(async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('league')
      .select(`id, name, league_points`)
      .order('league_points', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Supabase league leaderboard error:', error);
      setError(error);
      setRows([]);
    } else {
      setRows(
        (data ?? []).map((row, i) => ({
          rank: i + 1,
          name: row.name,
          points: row.league_points,
          // TODO: replace placeholder when a logo/emoji column exists
          avatarUrl: `/img/leagues/${row.id}.png`,
        }))
      );
      setError(null);
    }

    setLoading(false);
  }, [limit]);

  useEffect(() => {
    fetchLeagues();
  }, [fetchLeagues]);

  return { rows, loading, error, refetch: fetchLeagues };
}
