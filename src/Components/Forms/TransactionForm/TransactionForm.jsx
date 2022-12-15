import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import jwtDecode from "jwt-decode";

export default function TransactionForm({
  handleSubmit,
  validationSchema,
  initialValues,
  type,
}) {
  const token = localStorage.getItem("token");
  const { id } = jwtDecode(token);
  initialValues.userId = id;

  const onSubmit = values => {
    console.log(values);
    handleSubmit(values);
  };
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="d-flex flex-column">
      <div className={`${type === "income" ? "d-none" : "d-inline"}`}>
        <InputField
          placeholder="Id del usuario"
          name="toUserId"
          formik={formik}
        />
      </div>
      <InputField
        type="number"
        placeholder="Cantidad"
        name="amount"
        formik={formik}
      />
      <InputField
        type="text"
        placeholder="Descripción"
        name="description"
        formik={formik}
      />
      <Button type="submit" size="md" variant="primary">
        Confirmar
      </Button>
    </form>
  );
}
