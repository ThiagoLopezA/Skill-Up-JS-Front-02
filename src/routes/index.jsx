import React from 'react'
import { Routes, Route } from 'react-router-dom'

import '../App.css'

import Home from '../Components/Home'
import Transactions from '../Components/Transactions/Transactions'
import BackofficeContainer from '../Components/Backoffice/BackofficeContainer'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/transactions" element={<Transactions />} />
    <Route path="/backoffice" element={<BackofficeContainer />} />
  </Routes>
)

export default AppRoutes
