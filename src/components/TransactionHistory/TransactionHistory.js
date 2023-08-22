import { TransactionHistoryItem } from './TransactionHistoryItem';
import { Table, List, Text } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <Text>
          <List>Type</List>
          <List>Amount</List>
          <List>Currency</List>
        </Text>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryItem key={item.id} strings={item} />
        ))}
      </tbody>
    </Table>
  );
};
