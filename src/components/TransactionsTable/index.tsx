import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface  TransactionProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </tbody>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
                }).format(transaction.amount)
              }</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
