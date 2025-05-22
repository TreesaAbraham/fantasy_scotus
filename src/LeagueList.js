// src/LeagueList.js
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Navbar from './Navbar';


export default function LeagueList() {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLeagues() {
      setLoading(true);
      const { data, error } = await supabase
        .from('leagues')
        .select('*');
      if (error) {
        setError(error.message);
      } else {
        setLeagues(data);
      }
      setLoading(false);
    }

    fetchLeagues();
  }, []);

  if (loading) return <p>Loading leagues…</p>;
  if (error) return <p>Error loading leagues: {error}</p>;

  return (
    <>
      <Navbar />
      <div className="league-list">
        <h1>All Leagues</h1>
        <ul>
          {leagues.map((league) => (
            <li key={league.id}>
              <strong>{league.name}</strong>: {league.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
