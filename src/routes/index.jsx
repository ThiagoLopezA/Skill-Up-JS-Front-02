import React from 'react'
import { Routes, Route } from "react-router-dom";
import Transactions from "../Components/Transactions/Transactions";
import "../App.css";
import Home from "../Components/Home";
import UserRegistrationForm from '../Components/Forms/UserForm/UserRegistrationForm';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/transactions" element={<Transactions />} />
    <Route path="/signup" element={<UserRegistrationForm />} />

  </Routes>
);

export default AppRoutes;
