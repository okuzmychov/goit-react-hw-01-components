export const StatCard = ({ quiz: { id, label, percentage } }) => {
  return (
    <div>
    <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
    </li>
    </div>
  );
};