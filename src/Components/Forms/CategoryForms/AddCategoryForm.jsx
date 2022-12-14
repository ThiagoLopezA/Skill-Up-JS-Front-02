import React from 'react';
import * as Yup from 'yup';
import CategoryForm from './CategoryForm';

export default function  AddCategoryForm () {
  return (
    <div className="container">
      <h1>Agregar Categoría</h1>
      <CategoryForm
        initialValues={{
          name: '',
          description: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
          description: Yup.string().max(70, 'Must be 70 characters or less').required('Required')
        })}
        action="register"
      >
      </CategoryForm>
    </div>
  );
};
