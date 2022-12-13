import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ClientLayout from '../Components/ClientLayout/ClientLayout'
import Home from '../Components/Home'
import Transactions from '../Components/Transactions/Transactions'
import BackofficeContainer from '../Components/Backoffice/BackofficeContainer'

const AppRoutes = () => (
  <Routes>
    <Route element={<ClientLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/backoffice" element={<BackofficeContainer />} />
    </Route>
  </Routes>
)

export default AppRoutes
