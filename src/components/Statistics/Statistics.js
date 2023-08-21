import { StatCard } from './Statcard';
import { Wrapper, List, ListItem, HeaderText } from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <Wrapper>
    <HeaderText>Upload stats</HeaderText>
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

