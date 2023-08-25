import { StatCard } from './Statcard';
import { Wrapper, List, ListItem } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Wrapper>
      {title && <h2>{title}</h2>}
      <List className="stat-list">
        {stats.map(stat => (
          <ListItem key={stat.id}>
            <StatCard quiz={stat} />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
