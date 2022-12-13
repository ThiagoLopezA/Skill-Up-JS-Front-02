import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ClientLayout from '../Components/ClientLayout/ClientLayout'
import Login from '../pages/Login/Login'
import Home from '../pages/Home'
import Transactions from '../Components/Transactions/Transactions'
import BackofficeContainer from '../Components/Backoffice/BackofficeContainer'

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route element={<ClientLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/backoffice" element={<BackofficeContainer />} />
    </Route>
  </Routes>
)

export default AppRoutes
