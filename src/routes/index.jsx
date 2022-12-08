import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Transactions from '../Components/Transactions/Transactions'
import '../App.css'
import Home from '../Components/Home'
import ProtectedRoutes from '../Components/ProtectedRoutes/ProtectedRoutes'

const AppRoutes = () => (
  <Routes>
    <Route element={<ProtectedRoutes redirectPath="/login" />}>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
    </Route>
  </Routes>
)

export default AppRoutes
