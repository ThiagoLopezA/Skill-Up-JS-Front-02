import React from "react";
import Transaction from "./Transaction";

import { income, outcome } from "./TransactionsIcons";
export default function TransactionContainer({ transaction }) {
  const { categoryId, amount, date, description, User } = transaction;
  const title = `${User.firstName} ${User.lastName} ${
    description ? `- ${description}` : ""
  }`;
  const type = categoryId === 1 ? income : outcome;
  const subtitle =
    categoryId === 1 ? "Transferencia recibida" : "Transferencia enviada";
  const newDate = new Date(date);
  const formattedDate = `${newDate.getDate()}/${newDate.getMonth() + 1}`;

  return (
    <Transaction
      title={title}
      amount={amount}
      type={type}
      subtitle={subtitle}
      date={formattedDate}
    />
  );
}
