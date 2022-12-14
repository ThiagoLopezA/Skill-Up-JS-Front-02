import React from 'react';
import * as Yup from 'yup';
import UserForm from './UserForm';

export default function  UserRegistrationForm () {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <UserForm
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
        action="register"
      >
      </UserForm>
    </div>
  );
};
