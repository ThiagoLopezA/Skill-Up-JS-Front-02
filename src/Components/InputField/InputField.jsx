import React from "react";

export default function InputField({ formik, name, placeholder, type }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`form-control mb-1 ${
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
        <div class="invalid-feedback mb-2">{formik.errors[name]}</div>
      )}
    </>
  );
}
