import React from "react";
import * as Yup from "yup";
import CategoryForm from "./CategoryForm";

export default function EditCategoryForm({ category }) {
  return (
    <div className="container">
      <h1>Editar Categoría</h1>
      <CategoryForm
        initialValues={{
          name: category.name || "",
          description: category.description || "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().max(15, "Must be 15 characters or less"),
          description: Yup.string().max(70, "Must be 70 characters or less")
        })}
        action="edit"
      ></CategoryForm>
    </div>
  );
}
