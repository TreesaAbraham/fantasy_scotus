// src/components/PredictionsCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../scotus.css';                     // global styles only
import illustration from '../assets/predictions-illustrations.png'; // change to .svg if needed

/**
 * Re‑usable call‑out card that links users to the /predictions page.
 * All visual styling is handled by classes defined in scotus.css:
 *   .card, .predictions-card, .predictions-card__content, .predictions-card__illustration
 */
export default function PredictionsCard() {
  const navigate = useNavigate();

  return (
    <div className="card predictions-card">
      <div className="predictions-card__content">
        <h3>Check out your predictions and see your progress!</h3>
        <button onClick={() => navigate('/predictions')}>Check&nbsp;Now</button>
      </div>

      {/* Illustration (right side) */}
      <img
        src={illustration}
        alt="Predictions illustration"
        className="predictions-card__illustration"
      />
    </div>
  );
}
