import { list } from './TransactionHistory.styled';

export const TransactionHistoryItem = ({ strings: { id, type, amount, currency } }) => {
    return (
    <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
    );
};