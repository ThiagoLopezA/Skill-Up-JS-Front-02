import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";

export default function LoginForm() {
  const required = "Este campo es requerido";
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email().required(required),
    password: yup.string().required(required),
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
        name="password"
        type="password"
        placeholder="Contraseña"
        formik={formik}
      />
      <div className="actions mt-4">
        <Button type="submit" variant="primary" size="md" fullWidth>
          Iniciar sesión
        </Button>
        <Button variant="outlined" size="md" fullWidth>
          Registrarse
        </Button>
      </div>
    </form>
  );
}
