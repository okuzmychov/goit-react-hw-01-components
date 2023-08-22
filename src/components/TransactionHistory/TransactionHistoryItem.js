import { ListEl } from './TransactionHistory.styled';

export const TransactionHistoryItem = ({
  strings: { id, type, amount, currency },
}) => {
  return (
    <tr key={id}>
      <ListEl>{type}</ListEl>
      <ListEl>{amount}</ListEl>
      <ListEl>{currency}</ListEl>
    </tr>
  );
};
