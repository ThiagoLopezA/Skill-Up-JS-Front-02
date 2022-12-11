import React from "react";
import { Routes, Route } from "react-router-dom";
import Transactions from "../Components/Transactions/Transactions";
import Home from "../Components/Home";
import ClientLayout from "../Components/ClientLayout/ClientLayout";

const AppRoutes = () => (
  <Routes>
    <Route element={<ClientLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
    </Route>
  </Routes>
);

export default AppRoutes;
