// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';  // ← this path must point at the file above

export function useAuth() {
  const [session, setSession] = useState(supabase.auth.session());

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => setSession(newSession)
    );
    return () => listener.unsubscribe();
  }, []);

  return session;
}
