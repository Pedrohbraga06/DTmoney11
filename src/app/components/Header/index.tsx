"use client";
import { Container, Content, Logo, Button } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <Logo src="/Logo.svg" alt="DT Money" />
                <Button type="button">
                    Nova Transação
                </Button>
            </Content>
        </Container>
    );
}