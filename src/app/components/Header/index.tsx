"use client";
import { Container, Content, Logo, Button } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {


    return (
        <Container>
         <Content>
           <Logo src="/Logo.svg" alt="DT Money" />
            <Button type="button" onClick={onOpenNewTransactionModal}>
                Nova Transação
           </Button>
           </Content>
        </Container>
    );
}