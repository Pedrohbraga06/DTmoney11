'use client';
import React from "react";

import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "@/app/services/api";



export function TransactionsTable() {

useEffect(() => {
  api.get('transactions') 
  .then(response => console.log(response.data));
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
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>25/09/2025</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$ 1.100.00</td>
            <td>Casa</td>
            <td>25/09/2025</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
