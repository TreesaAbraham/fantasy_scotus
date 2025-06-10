import DashboardCard from './DashboardCard';
import illustration   from '../assets/predictions-illustrations.png';

export default {
  title: 'Components/DashboardCard',
  component: DashboardCard,
  args: {
    title: 'Leaderboard',
    copy:  'See top-ranked players in your league.',
    illustration,
    onClick: () => alert('Card tapped'),
  },
};

export const WithProgress = {
  args: { progress: 42 },
};

export const NoProgress = {
  args: { progress: undefined },
};
