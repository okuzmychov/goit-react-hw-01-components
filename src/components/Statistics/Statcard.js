import { ListEl } from './Statistics.styled';

export const StatCard = ({ quiz: { id, label, percentage } }) => {
  return (
    <div>
      <ListEl label={label} key={id}>
        <span className="label">{label}</span>
        <span className="percentage">
          <b>{percentage}%</b>
        </span>
      </ListEl>
    </div>
  );
};
