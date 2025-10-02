import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";
import App from "./page";

createServer({
  routes() {
    this.namespace = "api";

    this.get("transactions", () => {
      return {
        transactions: [
          {
            id: 1,
            title: "Transaction 1",
            amount: 400,
            type: "deposit",
            category: "food",
            createdAt: new Date("2025-09-25 09:00:00"),
          },
          {
            id: 2,
            title: "Aluguel",
            amount: 1100,
            type: "withdraw",
            category: "Casa",
            createdAt: new Date("2025-09-25 11:00:00"),
          },
        ],
      };
    });
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);