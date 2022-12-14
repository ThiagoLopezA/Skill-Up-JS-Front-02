import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import SelectField from "../../SelectField/SelectField";

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
    console.log(values);
    handleSubmit(values);
  };
  const formik = useFormik({
    validationSchema,
    initialValues: defaultValues,
    onSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="d-flex flex-column p-2">
      <InputField
        type="text"
        placeholder="Descripción"
        name="description"
        formik={formik}
      />
      <InputField
        type="number"
        placeholder="Cantidad"
        name="amount"
        formik={formik}
      />
      <SelectField name="categoryId" type="number" formik={formik}>
        <option value="">Seleccionar una categoría</option>
        <option value="1">category A</option>
        <option value="2">category B</option>
      </SelectField>
      <Button type="submit" variant="primary">
        Confirmar
      </Button>
    </form>
  );
}
