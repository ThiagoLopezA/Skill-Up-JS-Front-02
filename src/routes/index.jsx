import React from 'react'
import { Routes, Route } from "react-router-dom";
import Transactions from "../Components/Transactions/Transactions";
import "../App.css";
import Home from "../Components/Home";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/transactions" element={<Transactions />} />
  </Routes>
);

export default AppRoutes;
