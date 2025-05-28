// src/LeagueList.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';


export default function LeagueList() {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLeagues() {
      setLoading(true);
      const { data, error } = await supabase
        .from('league')
        .select('id, name, description, users_count');

      if (error) {
        setError(error.message);
      } else {
        setLeagues(data);
      }
      setLoading(false);
    }

    fetchLeagues();
  }, []);

  const handleJoin = async (leagueId) => {
    // TODO: implement actual join logic (e.g., supabase.from('league_members').insert...)
    alert(`Joining league ${leagueId}`);
  };

  if (loading) return <p>Loading leagues…</p>;
  if (error)   return <p>Error loading leagues: {error}</p>;

  return (
    <>
    
      <div className="league-list">
        <h1>All Leagues</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Users</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leagues.map((league) => (
              <tr key={league.id}>
                <td>{league.name}</td>
                <td>{league.description}</td>
                <td>{league.users_count}</td>
                <td>
                  <button onClick={() => handleJoin(league.id)}>
                    Join
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
