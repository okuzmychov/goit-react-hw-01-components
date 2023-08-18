export const Statistics = ({ stats: { id, label, percentage } }) => {
  return (
  <div>
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      </ul>
    </section>
  </div>
  );
};
