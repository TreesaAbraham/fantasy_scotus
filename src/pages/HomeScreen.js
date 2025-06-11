// src/pages/HomeScreen.js
import React from 'react';
import { space } from '../theme';   // spacing tokens
import { useAuth } from '../hooks/useAuth';
import { useUserProfile } from '../hooks/useUserProfile';
import GreetingHeader from '../components/GreetingHeader';
import '../scotus.css';

/**
 * Basic scroll-safe wrapper. Flesh out later with real content.
 */
export default function HomeScreen() {
  const session  = useAuth();
const userId   = session?.user?.id;
const { profile } = useUserProfile(userId);

const username  = profile?.username ?? 'Friend';
const avatarUrl = profile?.avatar_url;

  return (
    <main
      className="page"
      style={{
        padding: space.md,
        minHeight: 'calc(100vh - 60px - var(--space-md))', // 60px for BottomNav
        overflowY: 'auto',
      }}
    >
      <GreetingHeader username={username} avatarUrl={avatarUrl} />
      {/* todo: rest of the widgets*/}
      <p>Welcome back! 🚀 Build your widgets here.</p>
    </main>
  );
}
