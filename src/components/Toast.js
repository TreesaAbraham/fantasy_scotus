// src/components/Toast.js
import React from 'react';
import '../scotus.css';

export default function Toast({ message, kind = 'success', show }) {
  if (!show) return null;
  return (
    <div className={`toast toast--${kind}`}>
      {message}
    </div>
  );
}
