import { TransactionHistoryItem } from './TransactionHistoryItem';
import { Table, List } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <List>Type</List>
          <List>Amount</List>
          <List>Currency</List>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryItem key={item.id} strings={item} />
        ))}
      </tbody>
    </Table>
  );
};
