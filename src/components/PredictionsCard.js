import React from 'react';
import { useNavigate } from 'react-router-dom';


/**
 * Call-out card that links to /predictions.
 */
export default function PredictionsCard() {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl shadow-md p-6 bg-white flex flex-col items-center text-center">
      
      <h2 className="text-xl font-semibold mb-2">Ready to test your foresight?</h2>
      <p className="mb-6 text-gray-600 max-w-sm">
        Make your predictions for upcoming Supreme Court decisions and see how
        you stack up against the crowd.
      </p>
      <button
        onClick={() => navigate('/predictions')}
        className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
      >
        Go to Predictions
      </button>
    </div>
  );
}
