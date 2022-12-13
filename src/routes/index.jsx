import React from "react";
import { Routes, Route } from "react-router-dom";
import Transactions from "../Components/Transactions/Transactions";
import Home from "../pages/Home";
import ClientLayout from "../Components/ClientLayout/ClientLayout";
import Login from "../pages/Login/Login";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route element={<ClientLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
    </Route>
  </Routes>
);

export default AppRoutes;
