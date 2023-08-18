import { StatCard } from './Statcard'

export const Statistics = ({ stats }) => {
  return (
      <ul className="stat-list">
        {stats.map(stat => (
        <li key={stat.id}>
          <StatCard quiz={stat} />
        </li>
      ))}
    </ul>
  );
};

