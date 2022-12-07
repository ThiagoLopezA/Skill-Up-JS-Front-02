import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../../Button/Button";

export default function TransactionForm({ handleSubmit }) {
  const validationSchema = yup.object().shape({
    description: yup.string().required("Este campo es requerido."),
    amount: yup.number().min(1).required("Este campo es requerido."),
    categoryId: yup.number().required("Este campo es requerido."),
  });
  const defaultValues = {
    description: "",
    amount: "",
    categoryId: "",
  };
  const onSubmit = values => {
    handleSubmit(values);
  };
  const formik = useFormik({
    validationSchema,
    initialValues: defaultValues,
    onSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="d-flex flex-column p-2">
      <input
        type="text"
        placeholder="Descripción"
        className={`form-control mb-1 ${
          formik.touched.description
            ? Boolean(formik.errors.description)
              ? "is-invalid"
              : "is-valid"
            : ""
        }`}
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
      />
      {formik.touched.description && formik.errors.description && (
        <div class="invalid-feedback mb-2">{formik.errors.description}</div>
      )}

      <input
        type="number"
        name="amount"
        placeholder="Cantidad"
        className={`form-control mb-1 ${
          formik.touched.amount
            ? Boolean(formik.errors.amount)
              ? "is-invalid"
              : "is-valid"
            : ""
        }`}
        value={formik.values.amount}
        onChange={formik.handleChange}
      />
      {formik.touched.amount && formik.errors.amount && (
        <div class="invalid-feedback mb-2">{formik.errors.amount}</div>
      )}

      <select
        type="number"
        name="categoryId"
        className={`form-select mb-1 ${
          formik.touched.categoryId
            ? Boolean(formik.errors.categoryId)
              ? "is-invalid"
              : "is-valid"
            : ""
        }`}
        value={formik.values.categoryId}
        onChange={formik.handleChange}
      >
        <option value="">Seleccionar una categoría</option>
        <option value="1">category A</option>
        <option value="2">category B</option>
      </select>
      {formik.touched.categoryId && formik.errors.categoryId && (
        <div class="invalid-feedback mb-2">{formik.errors.categoryId}</div>
      )}
      <Button type="submit" variant="primary">
        Confirmar
      </Button>
    </form>
  );
}
