import React from "react";
import { useFormik } from "formik";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";

export default function CategoryForm({
  initialValues,
  validationSchema,
  onSubmit,
  action,
}) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField name="name" placeholder="Nombre" formik={formik} />
      <InputField name="description" placeholder="Descripción" formik={formik} />
      <Button type="submit" variant="primary">
        {action === "add" ? "Agregar" : "Enviar"}
      </Button>
    </form>
  );
}
