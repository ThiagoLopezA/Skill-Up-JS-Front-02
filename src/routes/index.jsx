import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientLayout from "../Components/ClientLayout/ClientLayout";
import Login from "../pages/Login/Login";
import Home from "../pages/Home";
import BackofficeContainer from "../pages/Backoffice/BackofficeContainer";
import Transactions from "../Components/Transactions/Transactions";
import UserRegistrationForm from "../Components/Forms/UserForm/UserRegistrationForm";
import EditUserForm from "../Components/Forms/UserForm/EditUserForm";
import Register from "../pages/Register/Register";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route element={<ClientLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/signup" element={<UserRegistrationForm />} />
      <Route
        path="/edit-user"
        element={
          <EditUserForm
            user={{
              firstName: "Pablo",
              lastName: "Polanco",
              email: "Pablo_Polanco@mail.com",
            }}
          />
        }
      />
      <Route path="/backoffice" element={<BackofficeContainer />} />
    </Route>
  </Routes>
);

export default AppRoutes;
