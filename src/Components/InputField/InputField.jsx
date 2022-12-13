import React from "react";
import styles from "./InputField.module.css";

export default function InputField({ formik, name, placeholder, type }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`form-control ${styles.input} my-3 ${
          formik.touched[name]
            ? Boolean(formik.errors[name])
              ? "is-invalid"
              : "is-valid"
            : ""
        }`}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="invalid-feedback mb-2">{formik.errors[name]}</div>
      )}
    </>
  );
}
