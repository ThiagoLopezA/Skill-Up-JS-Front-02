import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../App.css'

import Home from '../Components/Home'
import ProfileContainer from '../Components/Profile/ProfileContainer'
import Transactions from '../Components/Transactions/Transactions'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<ProfileContainer />} />
    <Route path="/transactions" element={<Transactions />} />
  </Routes>
)

export default AppRoutes
