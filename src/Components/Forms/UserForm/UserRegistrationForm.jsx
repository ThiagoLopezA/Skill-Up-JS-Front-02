import React from "react";
import * as Yup from "yup";
import UserForm from "./UserForm";
import { postRequest } from "../../../services/httpRequest";
import useRedirect from "../../../hooks/useRedirect";
import alerts from "../../../services/alerts";

export default function UserRegistrationForm() {
  const handleRedirect = useRedirect("/login");
  const alert = async () =>
    await alerts.errorAlert(
      "Paso un error",
      "Contacte con un administrador del sistema"
    );
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Necesita tener como máximo 15 caracteres.")
      .required("Este campo es requerido."),
    lastName: Yup.string()
      .max(20, "Necesita tener como máximo 20 caracteres.")
      .required("Este campo es requerido."),
    email: Yup.string()
      .email("Email invalido.")
      .required("Este campo es requerido."),
    password: Yup.string()
      .min(8, "La contraseña necesita tener como mínimo 8 caracteres.")
      .required("Este campo es requerido."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben ser iguales")
      .required("Este campo es requerido."),
  });
  const onSubmit = async values => {
    try {
      console.log(values);
      const response = await postRequest("/users/register", values);
      if (response.code === 201) {
        handleRedirect("/login");
      }
    } catch (err) {
      alert();
    }
  };
  return (
    <UserForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={onSubmit}
      action="register"
    />
  );
}
