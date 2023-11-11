import { Table, TableHeader, TableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHeader>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHeader>

      {transactions.map(transaction => {
        return (
          <tbody>
            <TableRow key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </TableRow>
          </tbody>
        );
      })}
    </Table>
  );
};
