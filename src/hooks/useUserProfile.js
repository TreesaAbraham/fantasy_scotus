// src/hooks/useUserProfile.js
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

/**
 * Returns { profile, loading, error }
 * Assumes a `profiles` table: id (uuid, PK), username, avatar_url
 */
export function useUserProfile(userId) {
  const [profile, setProfile]   = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    if (!userId) { setLoading(false); return; }

    async function fetchProfile() {
      const { data, error } = await supabase
        .from('profiles')
        .select('username, avatar_url')
        .eq('id', userId)
        .single();

      if (error) setError(error);
      else setProfile(data);

      setLoading(false);
    }

    fetchProfile();
  }, [userId]);

  return { profile, loading, error };
}
