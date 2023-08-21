import { TransactionHistoryItem } from './TransactionHistoryItem'
import { Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
    <Table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
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