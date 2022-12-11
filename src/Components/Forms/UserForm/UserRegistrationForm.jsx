import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function  UserRegistrationForm () {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required')
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
              <ErrorMessage name="firstName" component="div" className="alert alert-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name="lastName" className="form-control" />
              <ErrorMessage name="lastName" component="div" className="alert alert-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="alert alert-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="alert alert-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" name="confirmPassword" className="form-control" />
              <ErrorMessage name="confirmPassword" component="div" className="alert alert-danger" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
