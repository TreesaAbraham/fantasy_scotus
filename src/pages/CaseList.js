// src/cases.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function Cases() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCases() {
      setLoading(true);
      const { data, error } = await supabase
        .from('cases')
        .select(
          'id, created_at, case_number, case_name, question_presented, date_argued, fantasy_prediction, fantasy_prediction_split, status_update'
        ); // Removed filter on is_active since column doesn't exist

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
  if (error)   return <p>Error loading cases: {error}</p>;

  return (
    <>

      <div className="case-list">
        <h1>Supreme Court Cases</h1>

        {/* Legend */}
        <div className="legend">
          <span className="legend-item correct">✔</span> - correct prediction&nbsp;&nbsp;
          <span className="legend-item wrong">✖</span> - wrong prediction
        </div>

        <table>
          <thead>
            <tr>
              <th />
              <th>Case Name</th>
              <th>Case Number</th>
              <th>Date Argued</th>
              <th>Fantasy SCOTUS</th>
              <th>Prediction Split</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cases.map(c => (
              <tr key={c.id}>
                <td>{/* Placeholder for correct/wrong icon */}</td>
                <td>{c.case_name}</td>
                <td>{c.case_number}</td>
                <td>{c.date_argued ? new Date(c.date_argued).toLocaleDateString() : '—'}</td>
                <td>{c.fantasy_prediction}</td>
                <td>{c.fantasy_prediction_split}</td>
                <td>{c.status_update}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
