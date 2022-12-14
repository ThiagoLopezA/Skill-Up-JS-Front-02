import React from "react";
import * as Yup from "yup";
import UserForm from "./UserForm";

export default function UserRegistrationForm() {
  return (
    <UserForm
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
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
          .oneOf(
            [Yup.ref("password"), null],
            "Las contraseñas deben ser iguales"
          )
          .required("Este campo es requerido."),
      })}
      action="register"
    />
  );
}
