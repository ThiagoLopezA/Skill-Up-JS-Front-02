import React from "react";
import * as Yup from "yup";
import UserForm from "./UserForm";

export default function EditUserForm({ user }) {
  return (
    <div className="container">
      <h1>Edit User</h1>
      <UserForm
        initialValues={{
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, "Must be 15 characters or less"),
          lastName: Yup.string().max(20, "Must be 20 characters or less"),
          email: Yup.string().email("Invalid email address"),
          currentPassword: Yup.string().min(
            8,
            "Password must be at least 8 characters"
          ),
          newPassword: Yup.string().min(
            8,
            "Password must be at least 8 characters"
          ),
          confirmNewPassword: Yup.string().oneOf(
            [Yup.ref("newPassword"), null],
            "Passwords must match"
          ),
        })}
        action="edit"
      ></UserForm>
    </div>
  );
}
