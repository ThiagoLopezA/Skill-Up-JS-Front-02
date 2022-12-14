import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import SelectField from "../../SelectField/SelectField";

export default function TransactionForm({
  handleSubmit,
  validationSchema,
  initialValues,
  type,
}) {
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
      <div className={`${type === "income" ? "d-none" : "d-flex"}`}>
        <SelectField name="categoryId" type="number" formik={formik}>
          <option value="">Seleccionar una categoría</option>
          <option value="1">category A</option>
          <option value="2">category B</option>
        </SelectField>
      </div>
      <Button type="submit" size="md" variant="primary">
        Confirmar
      </Button>
    </form>
  );
}
