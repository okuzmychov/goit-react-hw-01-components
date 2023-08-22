import { ListEl, Text } from './TransactionHistory.styled';

export const TransactionHistoryItem = ({
  strings: { id, type, amount, currency },
}) => {
  return (
    <Text key={id}>
      <ListEl>{type}</ListEl>
      <ListEl>{amount}</ListEl>
      <ListEl>{currency}</ListEl>
    </Text>
  );
};
