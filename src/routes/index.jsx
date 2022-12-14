import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ClientLayout from '../Components/Layouts/ClientLayout/ClientLayout'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Home from '../pages/Home/Home'
import ProfileContainer from '../Components/Profile/ProfileContainer'
import BackofficeContainer from '../pages/Backoffice/BackofficeContainer'
import Transactions from '../pages/Transactions/Transactions'
import ProtectedRoutes from '../Components/ProtectedRoutes/ProtectedRoutes'
import NotFound from '../pages/NotFound'
import Help from '../pages/Help/Help'

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route
      element={
        <ProtectedRoutes
          protectedEndpoints={['/backoffice']}
          redirectPath="/login"
        >
          <ClientLayout />
        </ProtectedRoutes>
      }
    >
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<ProfileContainer />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/help" element={<Help />} />
      <Route path="/backoffice" element={<BackofficeContainer />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRoutes
