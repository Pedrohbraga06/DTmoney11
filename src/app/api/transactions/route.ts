import { NextResponse } from "next/server";

export async function GET() {
  const transactions = [
    { id: 1, title: "Compra de café", amount: 10, type: "expense" },
    { id: 2, title: "Venda de livro", amount: 50, type: "income" },
  ];

  return NextResponse.json(transactions);
}
