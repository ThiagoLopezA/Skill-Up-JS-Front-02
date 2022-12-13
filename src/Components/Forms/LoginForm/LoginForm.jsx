import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const onSubmit = values => {};
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField
        name="email"
        type="email"
        placeholder="Email"
        formik={formik}
      />
      <InputField
        name="email"
        type="password"
        placeholder="Contraseña"
        formik={formik}
      />
      <Button type="submit" variant="primary">
        Iniciar sesión
      </Button>
    </form>
  );
}
