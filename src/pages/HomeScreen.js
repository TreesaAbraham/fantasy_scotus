// src/pages/HomeScreen.js
import React from 'react';
import { space } from '../theme';   // spacing tokens
import { useAuth } from '../hooks/useAuth';
import { useUserProfile } from '../hooks/useUserProfile';
import GreetingHeader from '../components/GreetingHeader';
import '../scotus.css';
import PointsBadge            from '../components/PointsBadge';
import { useDailyPoints }     from '../hooks/useDailyPoints';


/**
 * Basic scroll-safe wrapper. Flesh out later with real content.
 */
export default function HomeScreen() {
  const session  = useAuth();
const userId   = session?.user?.id;
const { profile } = useUserProfile(userId);

const username  = profile?.username ?? 'Friend';
const avatarUrl = profile?.avatar_url;
const { points, loading: loadingPoints } = useDailyPoints(userId);

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
      <PointsBadge points={points} loading={loadingPoints} />
      {/* todo: rest of the widgets*/}
      <p>Welcome back! 🚀 Build your widgets here.</p>
    </main>
  );
}
