import React from "react";
import LoginForm from "../../Components/Forms/LoginForm/LoginForm";
import Brand from "../../Components/Brand/Brand";
import FormsLayout from "../../Components/Layouts/FormsLayout/FormsLayout";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleRedirect = link => navigate(link);
  return (
    <FormsLayout>
      <div className="text-center mb-5 mt-5">
        <Brand size="xl" />
      </div>
      <div className="col-10 col-md-6">
        <LoginForm />
        <Button
          variant="outlined"
          size="md"
          fullWidth
          handleClick={() => handleRedirect("/register")}
        >
          Registrarse
        </Button>
      </div>
    </FormsLayout>
  );
}
