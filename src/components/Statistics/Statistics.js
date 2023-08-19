import { StatCard } from './Statcard'

export const Statistics = ({ stats }) => {
  return (
    <div>
    <h3>Upload stats</h3>
      <ul className="stat-list">
        {stats.map(stat => (
        <li key={stat.id}>
          <StatCard quiz={stat} />
        </li>
      ))}
      </ul>
      </div>
  );
};

