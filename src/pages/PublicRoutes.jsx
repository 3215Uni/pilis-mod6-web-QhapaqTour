import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const PublicRoutes = () => {
  const { currentUser } = useContext(UserContext)

  return !currentUser ? <Outlet /> : <Navigate to="/dashboard" />
}
