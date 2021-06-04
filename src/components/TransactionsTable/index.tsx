import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(res => res.json())
    .then(data => console.log(data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td className="dep">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>02/06/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td className="sai">- R$1.000</td>
            <td>Desenvolvimento</td>
            <td>02/06/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}