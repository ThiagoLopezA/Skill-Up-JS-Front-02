import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
  const user = localStorage.getItem('accessToken')

  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoutes
