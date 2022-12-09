import React from "react";

export default function SelectField({ children, formik, type, name }) {
  return (
    <>
      <select
        type={type}
        name={name}
        className={`form-select mb-1 ${
          formik.touched[name]
            ? Boolean(formik.errors[name])
              ? "is-invalid"
              : "is-valid"
            : ""
        }`}
        value={formik.values[name]}
        onChange={formik.handleChange}
      >
        {children}
      </select>
      {formik.touched[name] && formik.errors[name] && (
        <div class="invalid-feedback mb-2">{formik.errors[name]}</div>
      )}
    </>
  );
}
