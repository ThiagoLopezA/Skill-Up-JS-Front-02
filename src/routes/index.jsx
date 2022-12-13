import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ClientLayout from '../Components/ClientLayout/ClientLayout'
import Login from '../pages/Login/Login'
import Home from '../pages/Home'
import BackofficeContainer from '../pages/Backoffice/BackofficeContainer'
import Transactions from '../Components/Transactions/Transactions'

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
