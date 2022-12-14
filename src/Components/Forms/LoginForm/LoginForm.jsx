import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import { postRequest } from "../../../services/httpRequest";
import useRedirect from "../../../hooks/useRedirect";

export default function LoginForm() {
  const handleRedirect = useRedirect();
  const required = "Este campo es requerido";
  const handleErrors = () => {
    formik.errors.email = "Email o contraseña incorrectos";
    formik.errors.password = "Email o contraseña incorrectos";
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email().required(required),
    password: yup.string().required(required),
  });
  const onSubmit = async values => {
    try {
      const response = await postRequest("/auth/login", values);
      if (response.code === 200) {
        localStorage.setItem("token", response.body);
        handleRedirect("/");
      }
    } catch (err) {
      handleErrors();
    }
  };
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
      </div>
    </form>
  );
}
