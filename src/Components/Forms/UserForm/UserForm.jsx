import React from 'react'
import { useFormik } from 'formik'
import InputField from '../../InputField/InputField'
import Button from '../../Button/Button'

export default function UserForm({
  initialValues,
  validationSchema,
  onSubmit,
  action,
}) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
  const isRegister = action === 'register' ? 'password' : 'currentPassword'
  const isRegisterPlaceholder =
    action === 'register' ? 'Contraseña' : 'Contraseña actual'
  const isConfirm =
    action === 'register' ? 'confirmPassword' : 'confirmNewPassword'
  const isConfirmPlaceholder =
    action === 'register'
      ? 'Confirmar contraseña'
      : 'Confirmar nueva contraseña'

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField name="firstName" placeholder="Nombre" formik={formik} />
      <InputField name="lastName" placeholder="Apellido" formik={formik} />
      <InputField
        name="email"
        type="email"
        placeholder="Email"
        formik={formik}
      />
      <InputField
        name={isRegister}
        type="password"
        placeholder={isRegisterPlaceholder}
        formik={formik}
      />
      <div className={`${action === 'register' ? 'd-none' : 'd-flex'}`}>
        <InputField
          name="newPassword"
          type="password"
          placeholder="Nueva contraseña"
          formik={formik}
        />
      </div>
      <InputField
        name={isConfirm}
        type="password"
        placeholder={isConfirmPlaceholder}
        formik={formik}
      />
      <Button type="submit" variant="primary" fullWidth size="md">
        {action === 'register' ? 'Registrarme' : 'Enviar'}
      </Button>
    </form>
  )
}
