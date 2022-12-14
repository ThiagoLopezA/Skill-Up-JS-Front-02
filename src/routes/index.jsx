import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ClientLayout from '../Components/ClientLayout/ClientLayout'
import Login from '../pages/Login/Login'
import Home from '../pages/Home'
import ProfileContainer from '../Components/Profile/ProfileContainer'
import BackofficeContainer from '../pages/Backoffice/BackofficeContainer'
import Transactions from '../Components/Transactions/Transactions'
import UserRegistrationForm from '../Components/Forms/UserForm/UserRegistrationForm'
import EditUserForm from '../Components/Forms/UserForm/EditUserForm'
import ProtectedRoutes from '../Components/ProtectedRoutes/ProtectedRoutes'
import AddCategoryForm from '../Components/Forms/CategoryForms/AddCategoryForm'
import EditCategoryForm from '../Components/Forms/CategoryForms/EditCategoryForm'
import NotFound from '../pages/NotFound'

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
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
      <Route path="/signup" element={<UserRegistrationForm />} />
      <Route
        path="/edit-user"
        element={
          <EditUserForm
            user={{
              firstName: 'Pablo',
              lastName: 'Polanco',
              email: 'Pablo_Polanco@mail.com',
            }}
          />
        }
      />
      <Route path="/add-category" element={<AddCategoryForm />} />
      <Route
        path="/edit-category"
        element={
          <EditCategoryForm
            category={{
              name: 'Ingresos',
              description: 'Todos los ingresos del mes',
            }}
          />
        }
      />
      <Route path="/backoffice" element={<BackofficeContainer />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default AppRoutes
