import React from 'react'
import { Routes, Route } from 'react-router-dom'

import '../App.css'

import Home from '../Components/Home'
import Transactions from '../Components/Transactions/Transactions'
import Backoffice from '../Components/Backoffice/Backoffice'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/transactions" element={<Transactions />} />
    <Route path="/backoffice" element={<Backoffice />} />
  </Routes>
)

export default AppRoutes
