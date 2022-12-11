import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ({user}) {
  return (
    <div className="container">
      <h1>Edit User</h1>
      <Formik
        initialValues={{
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          actualPassword: "",
          newPassword: "",
          confirmNewPassword: ""
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          actualPassword: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Required"),
          newPassword: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Required"),
          confirmNewPassword: Yup.string()
            .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
            .required("Required"),
        })}
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
              <label htmlFor="actualPassword">Actual Password</label>
              <Field
                type="password"
                name="actualPassword"
                className="form-control"
              />
              <ErrorMessage
                name="actualPassword"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
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
              <label htmlFor="confirmNewPassword">Confirm New Password</label>
              <Field
                type="password"
                name="confirmNewPassword"
                className="form-control"
              />
              <ErrorMessage
                name="confirmNewPassword"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3"
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
