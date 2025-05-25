// src/Cases.js
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Navbar from './Navbar';

export default function Cases() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCases() {
      setLoading(true);
      // Adjust 'cases' and 'is_active' to match your actual table/column names
      const { data, error } = await supabase
        .from('Cases')
        .select('id, title, docket_number, argued_date')
        .eq('is_active', true);

      if (error) {
        setError(error.message);
      } else {
        setCases(data);
      }
      setLoading(false);
    }

    fetchCases();
  }, []);

  if (loading) return <p>Loading cases…</p>;
  if (error) return <p>Error loading cases: {error}</p>;

  return (
    <>
      <Navbar />
      <div className="case-list">
        <h1>Active Supreme Court Cases</h1>
        <table>
          <thead>
            <tr>
              <th>Case Title</th>
              <th>Docket #</th>
              <th>Argued Date</th>
            </tr>
          </thead>
          <tbody>
            {cases.map(c => (
              <tr key={c.id}>
                <td>{c.title}</td>
                <td>{c.docket_number}</td>
                <td>{new Date(c.argued_date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
