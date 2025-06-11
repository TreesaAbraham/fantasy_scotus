// src/pages/HomeScreen.js
import React from 'react';
import { space } from '../theme';   // spacing tokens
import '../scotus.css';

/**
 * Basic scroll-safe wrapper. Flesh out later with real content.
 */
export default function HomeScreen() {
  return (
    <main
      className="page"
      style={{
        padding: space.md,
        minHeight: 'calc(100vh - 60px - var(--space-md))', // 60px for BottomNav
        overflowY: 'auto',
      }}
    >
      <h1 style={{ marginBottom: space.md }}>Home (work in progress)</h1>
      <p>Welcome back! 🚀 Build your widgets here.</p>
    </main>
  );
}
