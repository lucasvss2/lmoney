import { Container } from "./styles";

import deposit from '../../assets/deposit.svg'
import withdraw from '../../assets/withdraw.svg'
import total from '../../assets/total.svg'

export function Summary() {
  return (
  <Container>
    <div>
      <header>
        <p>Entradas</p>
        <img src={deposit} alt="Entradas"/>
      </header>
      <strong>R$ 1000,00</strong>
    </div>
    <div>
      <header>
        <p>Saídas</p>
        <img src={withdraw} alt="Saídas"/>
      </header>
      <strong> -R$ 500,00</strong>
    </div>
    <div className="highlight-background">
      <header>
        <p>Total</p>
        <img src={total} alt="Total"/>
      </header>
      <strong>R$ 500,00</strong>
    </div>
  </Container>
  );
}
