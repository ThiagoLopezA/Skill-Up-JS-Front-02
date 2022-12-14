import React from "react";
import * as yup from "yup";
import TransactionForm from "./TransactionForm";

export default function IncomeTransactionForm({ action }) {
  const validationSchema = yup.object().shape({
    description: yup.string(),
    amount: yup.number().min(1).required("Este campo es requerido."),
  });
  const initialValues = {
    description: "",
    amount: "",
    categoryId: 1,
  };
  const handleSubmit = () => {
    action();
  };
  return (
    <TransactionForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      type="income"
    />
  );
}
