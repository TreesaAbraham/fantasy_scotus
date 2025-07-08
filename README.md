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

* [ ] **Cases List Screen**

  * [ ] **PR1 – Cases scaffold**

    * [ ] feat: add `/cases` route and `<CasesScreen>` placeholder
    * [ ] chore: safe‑area & vertical scroll
    * [ ] test: route renders without crash
  * [ ] **PR2 – Top Navigation Bar**

    * [ ] feat: reuse `<TopNav>` with back arrow & favourite button
    * [ ] style: centre title alignment ("Case List")
    * [ ] test: snapshot with favourite on/off
  * [ ] **PR3 – Search Bar**

    * [ ] feat: `<SearchBar>` component with leading icon & rounded pills
    * [ ] chore: debounce search input
    * [ ] test: input change calls `onSearch`
  * [ ] **PR4 – Segmented toggle**

    * [ ] feat: `<SegmentedToggle>` (Upcoming vs All Cases) with badge
    * [ ] test: toggle fires `onSelect`
  * [ ] **PR5 – Case row**

    * [ ] feat: `<CaseRow>` (rank chip, case name, total points, avatar/icon)
    * [ ] style: row spacing & colours
    * [ ] test: row renders with long case names
  * [ ] **PR6 – List rendering**

    * [ ] feat: fetch `/cases?status=upcoming|all` API
    * [ ] feat: render FlatList of `<CaseRow>`
    * [ ] chore: wire search + toggle to API params
    * [ ] test: toggling or searching reloads list
  * [ ] **PR7 – Empty & Loading states**

    * [ ] feat: show `<EmptyState>` when no cases match
    * [ ] chore: add skeleton loaders during fetch
    * [ ] test: empty state visible on no results
  * [ ] **PR8 – Search‑results state**

    * [ ] feat: show "Search Results" header + icon when query applied
    * [ ] style: header typography & spacing
    * [ ] test: header toggles visibility based on `hasQuery`

* [ ] **Predictions Screen**

  * [ ] **PR1 – Predictions scaffold**

    * [ ] feat: add `/predictions` route and `<PredictionsScreen>` placeholder
    * [ ] chore: safe‑area & vertical scroll
    * [ ] test: route renders without crash
  * [ ] \*\*


# Fantasy SCOTUS: Build Signup and login

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

