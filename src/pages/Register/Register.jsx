import React from "react";
import Brand from "../../Components/Brand/Brand";
import Button from "../../Components/Button/Button";
import UserRegistrationForm from "../../Components/Forms/UserForm/UserRegistrationForm";
import FormsLayout from "../../Components/Layouts/FormsLayout/FormsLayout";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const handleRedirect = link => navigate(link);
  return (
    <FormsLayout>
      <div className="col-10 col-md-6">
        <div className="mb-3 mt-3 d-flex align-items-center justify-content-between">
          <Brand size="xl" />
          <div className={styles.divider}></div>
          <h2 className={styles.title}>Registrate</h2>
        </div>
        <UserRegistrationForm />
        <Button
          variant="outlined"
          size="md"
          fullWidth
          handleClick={() => handleRedirect("/login")}
        >
          Ya tengo cuenta
        </Button>
      </div>
    </FormsLayout>
  );
}
