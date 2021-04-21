import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>21/04/2021</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$ 1.100 </td>
            <td>Casa</td>
            <td>25/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
