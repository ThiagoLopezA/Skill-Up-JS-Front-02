import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ redirectPath }) => {
  const user = localStorage.getItem('accessToken')

  if (!user) return <Navigate to={redirectPath} replace />

  return <Outlet />
}

export default ProtectedRoutes
