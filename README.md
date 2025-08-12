git add .
git commit -m 'message'
git push origin main



building a new app
not reusing the data
stop using 4o
use 3o

“"In theory, consistency is about being disciplined, determined, and unwavering. In practice, consistency is about being adaptable. Don't have much time? Scale it down. Don't have much energy? Do the easy version. Find different ways to show up depending on the circumstances. Let your habits change shape to meet the demands of the day. Adaptability is the way of consistency." — James Clear


# Fantasy SCOTUS – Concise Roadmap

* [ ] **Court Dashboard Screen**

  * [x] **PR1 – Dashboard scaffold**

    * [x] feat: add `/court` route and `<CourtDashboard>` placeholder
    * [x] chore: add scroll‑view wrapper with safe‑area insets
    * [x] test: route renders without crash
  * [x] **PR2 – Top Navigation Bar**

    * [x] feat: create `<TopNav>` with back, title, search
    * [x] style: apply purple‑600 text & spacing tokens
    * [x] test: snapshot neutral & long‑title states
  * [x] **PR3 – Filter Tabs**

    * [x] feat: build `<PillTabBar>` component
    * [x] feat: add icons (file, flame, clipboard)
    * [x] feat: wire `selectedTab` state & handler
    * [x] docs: storybook controls for pill sizes
    * [x] test: tab click updates selection
  * [x] **PR4 – Predictions Call‑out Card**

    * [x] feat: create `<PredictionsCard>` with CTA
    * [x] feat: hook navigation to `/predictions`
    * [x] style: import illustration asset
    * [x] test: button press navigates
  * [x] **PR5 – Reusable Dashboard Card**

    * [x] feat: generic `<DashboardCard>` (title, copy, illustration, progress)
    * [x] style: add `<ProgressBar>` sub‑component
    * [x] docs: usage examples
    * [x] test: renders with different progress values
  * [x] **PR6 – Card Instances**

    * [x] feat: add `cardData` array in `CourtDashboard`
    * [x] feat: render LeaderboardCard (70 %)
    * [x] feat: render CasesCard (60 %)
    * [x] feat: render LeaguesCard (0 %)
    * [x] chore: navigation handlers
  * [x] **PR7 – Bottom Navigation Bar**

    * [x] feat: create `<BottomNav>` (Home, Star, Court\*, Plus, Profile)
    * [x] feat: integrate vector icons
    * [x] style: active‑tab badge
    * [x] test: tab switch changes route
  * [x] **PR8 – Theme & Style**

    * [x] chore: define colour palette & typography scale
    * [x] chore: setup spacing constants
    * [x] refactor: migrate components to theme

* [x] **Home Screen**

  * [x] **PR1 – Home scaffold**

    * [x] feat: add `/home` route and `<HomeScreen>` placeholder
    * [x] chore: safe‑area & vertical scroll
    * [x] test: route renders without crash
  * [x] **PR2 – Greeting header**

    * [x] feat: `<GreetingHeader>` with username & avatar
    * [x] chore: fetch user profile data
    * [x] style: avatar circle & typography
    * [x] test: renders with long names
  * [x] **PR3 – Points badge**

    * [x] feat: `<PointsBadge>` component ("Today's Points: …")
    * [x] chore: hook to points API
    * [x] test: badge updates on props change
  * [x] **PR4 – Leagues pills**

    * [x] feat: `<LeaguePill>` component with icon & label
    * [x] feat: horizontal wrap list of pills
    * [x] style: active vs inactive pill states
    * [x] test: tap fires `onSelectLeague`
  * [x] **PR5 – Case carousel**

    * [x] feat: `<CaseCard>` reusable (illustration, title, summary, meta icons)
    * [x] feat: horizontal scroll carousel
    * [x] chore: dynamic data via `/cases?leagueId=`
    * [x] test: card press navigates to `/cases/:id`
  * [x] **PR6 – Navigation integration**

    * [x] chore: connect pills → `/league/:id` route
    * [x] chore: bottom nav highlights Home tab
    * [x] test: navigation hooks work across tabs

* [x] **Leaderboard Screen**

  * [x] **PR1 – Leaderboard scaffold**

    * [x] feat: add `/leaderboard` route and `<LeaderboardScreen>` placeholder
    * [x] chore: safe‑area & vertical scroll
    * [x] test: route renders without crash
  * [x] **PR2 – Top Navigation Bar**

    * [x] feat: reuse `<TopNav>` with back arrow & favourite button
    * [x] style: centre title alignment
    * [x] test: snapshot with favourite on/off
  * [x] **PR3 – Segmented toggle**

    * [x] feat: `<SegmentedToggle>` (Leaderboard vs Leagues Leaderboard) with badge support
    * [x] test: toggle fires `onSelect`
  * [x] **PR4 – Leaderboard row**

    * [x] feat: `<LeaderboardRow>` (rank chip, name, points, avatar)
    * [x] style: row spacing & colours
    * [x] test: row renders with long names
  * [x] **PR5 – List rendering**

    * [x] feat: fetch `/leaderboard?mode=overall|league` API
    * [x] feat: render FlatList of `<LeaderboardRow>`
    * [x] chore: wire segmented toggle to API param
    * [x] test: switching toggle reloads data
  * [ ] **PR6 – Empty & Loading states**

    * [x] feat: `<EmptyState>` component (illustration + hint text)
    * [x] feat: show empty state when selected mode returns \[]
    * [x] chore: add skeleton loaders for initial fetch
    * [x] test: empty state appears for empty dataset

* [x] **Leagues Screen**

  * [x] **PR1 – Leagues scaffold**

    * [x] feat: add `/leagues` route and `<LeaguesScreen>` placeholder
    * [x] chore: safe‑area & vertical scroll
    * [x] test: route renders without crash
  * [x] **PR2 – Top Navigation Bar**

    * [x] feat: reuse `<TopNav>` with back arrow & favourite button
    * [x] style: centre title alignment ("Leagues")
    * [x] test: snapshot with favourite on/off
  * [s] **PR3 – Segmented toggle**

    * [x] feat: `<SegmentedToggle>` (All Leagues vs Law School Leagues) with badge support
    * [x] test: toggle fires `onSelect`
  * [x] **PR4 – League row**

    * [x] feat: `<LeagueRow>` (rank chip, league name, total points, avatar/icon)
    * [x] style: row spacing & colours
    * [x] test: row renders with long league names
  * [x] **PR5 – List rendering**

    * [x] feat: fetch `/leagues?type=all|law-school` API
    * [x] feat: render FlatList of `<LeagueRow>`
    * [x] chore: wire segmented toggle to API param
    * [x] test: switching toggle reloads data
  * [x] **PR6 – Empty & Loading states**

    * [x] feat: show `<EmptyState>` when dataset empty
    * [x] chore: add skeleton loaders during fetch
    * [x] test: empty state visible on no results

* [x] **Cases List Screen**

  * [x] **PR1 – Cases scaffold**

    * [x] feat: add `/cases` route and `<CasesScreen>` placeholder
    * [x] chore: safe‑area & vertical scroll
    * [x] test: route renders without crash
  * [x] **PR2 – Top Navigation Bar**

    * [x] feat: reuse `<TopNav>` with back arrow & favourite button
    * [x] style: centre title alignment ("Case List")
    * [x] test: snapshot with favourite on/off
  * [x] **PR3 – Search Bar**

    * [x] feat: `<SearchBar>` component with leading icon & rounded pills
    * [x] chore: debounce search input
    * [x] test: input change calls `onSearch`
  * [x] **PR4 – Segmented toggle**

    * [x] feat: `<SegmentedToggle>` (Upcoming vs All Cases) with badge
    * [x] test: toggle fires `onSelect`
  * [x] **PR5 – Case row**

    * [x] feat: `<CaseRow>` (rank chip, case name, total points, avatar/icon)
    * [x] style: row spacing & colours
    * [x] test: row renders with long case names
  * [x] **PR6 – List rendering**

    * [x] feat: fetch `/cases?status=upcoming|all` API
    * [x] feat: render FlatList of `<CaseRow>`
    * [x] chore: wire search + toggle to API params
    * [x] test: toggling or searching reloads list
  * [x] **PR7 – Empty & Loading states**

    * [x] feat: show `<EmptyState>` when no cases match
    * [x] chore: add skeleton loaders during fetch
    * [x] test: empty state visible on no results
  * [x] **PR8 – Search‑results state**

    * [x] feat: show "Search Results" header + icon when query applied
    * [x] style: header typography & spacing
    * [x] test: header toggles visibility based on `hasQuery`

*- [ ] **Case Detail / Predictions Screen**

  * [x] **PR1 – Predictions scaffold**
    * [x] feat: add `/predictions` route and `<PredictionsScreen>` placeholder
    * [x] chore: safe-area & vertical scroll
    * [x] test: route renders without crash

  * [x] **PR2 – Case header & meta chips**
    * [x] feat: `<CaseHeader>` with back arrow, title, and chips (`docket`, `term`)
    * [x] style: pill chips & header spacing (purple-600)
    * [x] test: long title wraps/ellipsizes without layout shift

  * [x] **PR3 – Question Presented section**
    * [x] feat: `<QuestionPresented>` block with heading + rich text
    * [x] style: section typography & spacing
    * [x] test: expand/collapse for long text (optional)

  * [x] **PR4 – Prediction summary cards**
    * [x] feat: reusable `<PredictionCard>` (title, two progress bars, meta chips)
    * [x] feat: render **Crowd Prediction** and **Final Decision** instances
    * [x] style: card radius/shadow; green Affirm & red Reverse bars
    * [x] test: cards render both states; progress has ARIA roles

  * [x] **PR5 – Justice Predictions list**
    * [x] feat: `<JusticeRow>` (avatar, name, **Affirm**/**Reverse** pill buttons)
    * [x] feat: radio-group behaviour; keep `selectedVotes[justiceId] = 'affirm'|'reverse'|null`
    * [x] chore: `JUSTICES` constant (9 names, ids, avatars)
    * [x] style: green Affirm / red Reverse pills; focus states for keyboard
    * [x] test: clicking toggles state and calls `onChange(justiceId, vote)`

  * [ ] **PR6 – Save & data wiring**
    * [ ] feat: map selections to payload and upsert to Supabase `predictions`
    * [ ] chore: toast on save; disable save when no changes; optimistic update
    * [ ] test: service posts correct shape; handles API error gracefully

# Sign in Screen

- [ ] **Authentication – Sign In Screen (new design)**
  - [ ] **PR1 – Auth layout & header**
    - [ ] feat: create `<AuthLayout>` (centered column, safe-area, scroll)
    - [ ] feat: `<AuthHeader title="Sign In">` and top illustration asset
    - [ ] style: apply violet palette & spacing tokens
    - [ ] test: `/login` route renders header + layout without crash

  - [ ] **PR2 – Credentials form fields**
    - [ ] feat: `<TextField id="identifier" label="Email/Phone Number">`
    - [ ] feat: `<PasswordField id="password" label="Password" showHide>`
    - [ ] style: rounded inputs, focus ring, helper text
    - [ ] test: validation (required, email format); phone path TODO

  - [ ] **PR3 – Forgot Password flow**
    - [ ] feat: link “Forgot Password?” → `/reset-password`
    - [ ] feat: service `requestPasswordReset(email)` via Supabase
    - [ ] style: subtle inline link under password
    - [ ] test: success toast on request; error shown on invalid email

  - [ ] **PR4 – Primary CTA**
    - [ ] feat: `<PrimaryButton>` “Sign In” with loading/disabled states
    - [ ] chore: submit handler → `supabase.auth.signInWithPassword({ email, password })`
    - [ ] test: happy path navigates to `/app`; failed path shows error

  - [ ] **PR5 – Social OAuth row**
    - [ ] feat: `<SocialAuthRow>` with Google + Facebook buttons
    - [ ] chore: call `supabase.auth.signInWithOAuth({ provider: 'google'|'facebook' })`
    - [ ] style: divider “or” line between form and OAuth
    - [ ] test: clicking a provider triggers OAuth call (mocked)

  - [ ] **PR6 – Footer sign-up link**
    - [ ] feat: “Don’t have an account? SIGN UP” → `/signup`
    - [ ] style: uppercase emphasis on SIGN UP
    - [ ] test: link navigates correctly

  - [ ] **PR7 – Accessibility & UX polish**
    - [ ] style: labels bound to inputs (`for`/`id`), `aria-invalid`, `autocomplete` attrs
    - [ ] chore: submit on Enter key; return focus to first invalid input
    - [ ] test: keyboard tab order; screen reader labels present

  - [ ] **PR8 – Security & limits**
    - [ ] chore: throttle multiple submits (min 1s between attempts)
    - [ ] chore: log auth errors (no PII) for diagnostics
    - [ ] test: rapid clicks do not send duplicate auth requests


- [ ] **Authentication – Forgot Password Screen**
  - [ ] **PR1 – Reset Password scaffold & route**
    - [ ] feat: add `/reset-password` route and `<ResetPasswordScreen>` placeholder
    - [ ] feat: reuse `<AuthHeader title="Forgot Password?">` with illustration
    - [ ] style: apply violet spacing/typography to match Sign In
    - [ ] test: route renders without crash

  - [ ] **PR2 – Identifier field + helper text**
    - [ ] feat: `<TextField id="identifier" label="Email/Phone Number">`
    - [ ] style: rounded input, focus ring, subtle helper text under field
    - [ ] test: validation (required, email format); phone path TODO

  - [ ] **PR3 – Submit flow (Supabase)**
    - [ ] feat: call `supabase.auth.resetPasswordForEmail(email, { redirectTo })`
    - [ ] chore: add `REACT_APP_RESET_REDIRECT_URL` to `.env` and config helper
    - [ ] test: mock Supabase; assert function called with email + redirect

  - [ ] **PR4 – Success UX**
    - [ ] feat: show inline success state (“We sent you a message…”) or navigate to `CheckEmail` screen
    - [ ] style: success note with icon; disable submit while loading
    - [ ] test: success state shows after resolved promise

  - [ ] **PR5 – Divider + Social row (optional)**
    - [ ] feat: reuse `<SocialAuthRow>` (Google, Facebook) beneath divider “or”
    - [ ] style: centered icons; responsive spacing
    - [ ] test: icons render and buttons are keyboard focusable

  - [ ] **PR6 – Footer link**
    - [ ] feat: “Already have an account? SIGN IN” → `/login`
    - [ ] style: emphasize SIGN IN; correct hit area
    - [ ] test: link navigates to login

  - [ ] **PR7 – Accessibility & anti-abuse**
    - [ ] chore: `aria-invalid`, `autocomplete="email"`, proper `<label for>`
    - [ ] chore: throttle duplicate submits; handle 429/unknown email gracefully
    - [ ] test: Enter key submits; first invalid field receives focus



SCOTUS Case Feed — Feature‑Driven Roadmap

Mission: Deliver a live SCOTUS docket to Fantasy‑SCOTUS via tightly scoped features, each split into pull requests (PRs) and granular commits.

1. Project Setup

PR feat/init

Commits

chore: scaffold poetry project

test: add pytest baseline

feat: implement minimal Oyez client fetch_term()

2. Data Models & Database

PR feat/db

Commits

chore: create supabase schema — cases + sync_state tables

feat: add SQLAlchemy models for cases & sync_state

chore: generate initial alembic migration

3. ETL Pipeline

PR feat/etl-sync

Commits

feat: add sync_cases.py to fetch & parse Oyez JSON

refactor: extract JSON→model parser util

perf: bulk‑upsert cases via SQLAlchemy core

test: unit tests for sync_cases and parser

4. Public REST API

PR feat/rest-api

Commits

feat: scaffold FastAPI app

feat: GET /cases/latest with pagination & term filter

docs: auto‑generate Swagger docs

test: endpoint integration tests

5. Scheduler & Ops

PR feat/scheduler

Commits

ci: add GitHub Actions cron to run sync_cases daily 08:00 ET

feat: Slack webhook alert on sync failure

docs: update ops runbook section

6. Front‑End Integration

PR feat/frontend

Commits

feat: create React hook useLatestCases()

feat: decisions card component

chore: add feature flag scotus_live_feed

test: component snapshot tests

Next Steps: Tick off commits locally, push to branch, open PR, request review. Merge in order (1→6) for smooth rollout.

notes; curl https://api.oyez.org/cases/2025
