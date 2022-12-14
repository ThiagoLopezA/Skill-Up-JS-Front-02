import { Navigate, useLocation } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const ProtectedRoutes = ({ redirectPath, protectedEndpoints, children }) => {
  const token = localStorage.getItem('token')
  if (!token) return <Navigate to={redirectPath} replace />

  const { pathname } = useLocation()
  const isProtected = protectedEndpoints.includes(pathname)

  const user = jwt_decode(token)
  const userIsAdmin = user.roleId === 2

  if (isProtected && !userIsAdmin) {
    return <Navigate to={redirectPath} replace /> // lo ideal sería que retorne el componente Not Found
  }

  return children
}

export default ProtectedRoutes
