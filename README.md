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
  * [ ] **PR7 – Bottom Navigation Bar**

    * [ ] feat: create `<BottomNav>` (Home, Star, Court\*, Plus, Profile)
    * [ ] feat: integrate vector icons
    * [ ] style: active‑tab badge
    * [ ] test: tab switch changes route
  * [ ] **PR8 – Theme & Style**

    * [ ] chore: define colour palette & typography scale
    * [ ] chore: setup spacing constants
    * [ ] refactor: migrate components to theme

* [ ] **Home Screen**

  * [ ] **PR1 – Home scaffold**

    * [ ] feat: add `/home` route and `<HomeScreen>` placeholder
    * [ ] chore: safe‑area & vertical scroll
    * [ ] test: route renders without crash
  * [ ] **PR2 – Greeting header**

    * [ ] feat: `<GreetingHeader>` with username & avatar
    * [ ] chore: fetch user profile data
    * [ ] style: avatar circle & typography
    * [ ] test: renders with long names
  * [ ] **PR3 – Points badge**

    * [ ] feat: `<PointsBadge>` component ("Today's Points: …")
    * [ ] chore: hook to points API
    * [ ] test: badge updates on props change
  * [ ] **PR4 – Leagues pills**

    * [ ] feat: `<LeaguePill>` component with icon & label
    * [ ] feat: horizontal wrap list of pills
    * [ ] style: active vs inactive pill states
    * [ ] test: tap fires `onSelectLeague`
  * [ ] **PR5 – Case carousel**

    * [ ] feat: `<CaseCard>` reusable (illustration, title, summary, meta icons)
    * [ ] feat: horizontal scroll carousel
    * [ ] chore: dynamic data via `/cases?leagueId=`
    * [ ] test: card press navigates to `/cases/:id`
  * [ ] **PR6 – Navigation integration**

    * [ ] chore: connect pills → `/league/:id` route
    * [ ] chore: bottom nav highlights Home tab
    * [ ] test: navigation hooks work across tabs

* [ ] **Leaderboard Screen**

  * [ ] **PR1 – Leaderboard scaffold**

    * [ ] feat: add `/leaderboard` route and `<LeaderboardScreen>` placeholder
    * [ ] chore: safe‑area & vertical scroll
    * [ ] test: route renders without crash
  * [ ] **PR2 – Top Navigation Bar**

    * [ ] feat: reuse `<TopNav>` with back arrow & favourite button
    * [ ] style: centre title alignment
    * [ ] test: snapshot with favourite on/off
  * [ ] **PR3 – Segmented toggle**

    * [ ] feat: `<SegmentedToggle>` (Leaderboard vs Leagues Leaderboard) with badge support
    * [ ] test: toggle fires `onSelect`
  * [ ] **PR4 – Leaderboard row**

    * [ ] feat: `<LeaderboardRow>` (rank chip, name, points, avatar)
    * [ ] style: row spacing & colours
    * [ ] test: row renders with long names
  * [ ] **PR5 – List rendering**

    * [ ] feat: fetch `/leaderboard?mode=overall|league` API
    * [ ] feat: render FlatList of `<LeaderboardRow>`
    * [ ] chore: wire segmented toggle to API param
    * [ ] test: switching toggle reloads data
  * [ ] **PR6 – Empty & Loading states**

    * [ ] feat: `<EmptyState>` component (illustration + hint text)
    * [ ] feat: show empty state when selected mode returns \[]
    * [ ] chore: add skeleton loaders for initial fetch
    * [ ] test: empty state appears for empty dataset

* [ ] **Leagues Screen**

  * [ ] **PR1 – Leagues scaffold**

    * [ ] feat: add `/leagues` route and `<LeaguesScreen>` placeholder
    * [ ] chore: safe‑area & vertical scroll
    * [ ] test: route renders without crash
  * [ ] **PR2 – Top Navigation Bar**

    * [ ] feat: reuse `<TopNav>` with back arrow & favourite button
    * [ ] style: centre title alignment ("Leagues")
    * [ ] test: snapshot with favourite on/off
  * [ ] **PR3 – Segmented toggle**

    * [ ] feat: `<SegmentedToggle>` (All Leagues vs Law School Leagues) with badge support
    * [ ] test: toggle fires `onSelect`
  * [ ] **PR4 – League row**

    * [ ] feat: `<LeagueRow>` (rank chip, league name, total points, avatar/icon)
    * [ ] style: row spacing & colours
    * [ ] test: row renders with long league names
  * [ ] **PR5 – List rendering**

    * [ ] feat: fetch `/leagues?type=all|law-school` API
    * [ ] feat: render FlatList of `<LeagueRow>`
    * [ ] chore: wire segmented toggle to API param
    * [ ] test: switching toggle reloads data
  * [ ] **PR6 – Empty & Loading states**

    * [ ] feat: show `<EmptyState>` when dataset empty
    * [ ] chore: add skeleton loaders during fetch
    * [ ] test: empty state visible on no results

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
