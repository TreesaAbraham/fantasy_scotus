// src/components/TopNav.js
import React from 'react';

/**
 * Page-level header with ← back button, centered title, and 🔍 search icon.
 *
 * Props:
 *  - title      (string) : heading text
 *  - onBack     (fn)     : called when back arrow is pressed
 *  - onSearch   (fn)     : called when search icon is pressed
 */
export default function TopNav({ title, onBack, onSearch }) {
  return (
    <header className="top-nav">
      <button className="back"   onClick={onBack}>←</button>
      <h1 className="title">{title}</h1>
      <button className="search" onClick={onSearch}>🔍</button>
    </header>
  );
}
