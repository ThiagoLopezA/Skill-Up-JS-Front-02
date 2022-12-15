import React from "react";
import * as yup from "yup";
import TransactionForm from "./TransactionForm";
import { useDispatch } from "react-redux";
import { createTransaction } from "../../../app/transactionSlice";

export default function IncomeTransactionForm({ action }) {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    description: yup.string(),
    amount: yup.number().min(1).required("Este campo es requerido."),
  });
  const initialValues = {
    description: "",
    amount: "",
    categoryId: 1,
  };
  const handleSubmit = values => {
    try {
      dispatch(createTransaction(values));
      action();
    } catch (error) {
      console.log(error);
    }
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
