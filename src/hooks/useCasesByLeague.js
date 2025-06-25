// src/hooks/useCasesByLeague.js
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

/**
 * Fetch the 10 most-recent cases.
 *
 * Returned objects:
 *   {
 *     id,                  // uuid
 *     title,               // case_name
 *     summary,             // question_presented
 *     status,              // status_update   (used for a meta badge / icon)
 *     dateArgued           // date_argued     (optional extra for sorting)
 *   }
 */
export function useCasesByLeague(/* leagueId */) {
  const [cases,   setCases]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    async function fetchCases() {
      setLoading(true);

      /*---------------------------------------------------------------
        Your cases table does NOT have league_id or illustration_url
        yet, so we pull only what exists and alias the names.
      ----------------------------------------------------------------*/
      const { data, error } = await supabase
        .from('cases')
        .select(`
          id,
          case_name           as title,
          question_presented  as summary,
          status_update       as status,
          date_argued         as dateArgued
        `)
        .order('date_argued', { ascending: false })
        .limit(10);          // adjust as you like

      if (error) setError(error);
      else       setCases(data ?? []);

      setLoading(false);
    }

    fetchCases();
  }, /* [leagueId]  ← re-enable once you add that column */ []);

  return { cases, loading, error };
}
