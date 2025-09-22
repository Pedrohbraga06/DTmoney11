
import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src="/Icons.svg" alt="Entradas" />
                </header>
                <strong>R$ 17.400,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src="/Icons(1).svg" alt="Saídas" />
                </header>
                <strong>- R$ 1.259,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src="/Icons(2).svg" alt="Total" />
                </header>
                <strong>R$ 16.141,00</strong>
            </div>
        </Container>
    );
}
