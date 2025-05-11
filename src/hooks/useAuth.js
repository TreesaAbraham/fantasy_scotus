// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { supabase }        from '../supabaseClient';

export function useAuth() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // 1) fetch initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // 2) subscribe to future changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      }
    );

    // 3) cleanup on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return session;
}
