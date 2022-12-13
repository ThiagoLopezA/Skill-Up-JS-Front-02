import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function UserForm({ initialValues, validationSchema, action }) {
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field type="text" name="firstName" className="form-control" />
              <ErrorMessage
                name="firstName"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name="lastName" className="form-control" />
              <ErrorMessage
                name="lastName"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage
                name="email"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor={action === "register" ? "password" : "currentPassword"}
              >
                {action === "register" ? "Password" : "Current password"}
              </label>
              <Field
                type="password"
                name={action === "register" ? "password" : "currentPassword"}
                className="form-control"
              />
              <ErrorMessage
                name={action === "register" ? "password" : "currentPassword"}
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group" style={{display: action==="register" ? 'none' : 'block' }}>
              <label htmlFor="newPassword">New Password</label>
              <Field
                type="password"
                name="newPassword"
                className="form-control"
              />
              <ErrorMessage
                name="newPassword"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor={
                  action === "register"
                    ? "confirmPassword"
                    : "confirmNewPassword"
                }
              >
                {action === "register"
                  ? "Confirm password"
                  : "Confirm new password"}
              </label>
              <Field
                type="password"
                name={
                  action === "register"
                    ? "confirmPassword"
                    : "confirmNewPassword"
                }
                className="form-control"
              />
              <ErrorMessage
                name={
                  action === "register"
                    ? "confirmPassword"
                    : "confirmNewPassword"
                }
                component="div"
                className="alert alert-danger"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3"
              disabled={isSubmitting}
            >
              {action === "register" ? "Sign Up" : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
