import PillTabBar from './PillTabBar';

export default { title: 'Components/PillTabBar', component: PillTabBar };

const tabs = [
  { id: 'all',  label: 'All',       icon: '📄' },
  { id: 'open', label: 'Ongoing',   icon: '🔥' },
  { id: 'done', label: 'Completed', icon: '📋' },
];

export const Default = () => <PillTabBar tabs={tabs} />;
