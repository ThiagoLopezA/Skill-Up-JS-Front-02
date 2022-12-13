import React from 'react'
import styles from './InputField.module.css'

export default function InputField({
  formik,
  name,
  placeholder,
  type,
  readOnly,
}) {
  const cursor = readOnly ? 'no-drop' : 'text'

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`form-control ${styles.input} my-3 ${
          formik.touched[name]
            ? Boolean(formik.errors[name])
              ? 'is-invalid'
              : 'is-valid'
            : ''
        }`}
        style={{ cursor }}
        name={name}
        id={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        readOnly={readOnly}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="invalid-feedback mb-2">{formik.errors[name]}</div>
      )}
    </>
  )
}
