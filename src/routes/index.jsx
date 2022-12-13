import React from "react";
import { Routes, Route } from "react-router-dom";
import Transactions from "../Components/Transactions/Transactions";
import "../App.css";
import Home from "../Components/Home";
import UserRegistrationForm from '../Components/Forms/UserForm/UserRegistrationForm';
import EditUserForm from '../Components/Forms/UserForm/EditUserForm';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route element={<ClientLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/signup" element={<UserRegistrationForm />} />
      <Route path="/edit-user" element={<EditUserForm user={{ firstName: "Pablo", lastName: 'Polanco', email: "Pablo_Polanco@mail.com" }} />} />
    </Route>
  </Routes>
);

export default AppRoutes;
