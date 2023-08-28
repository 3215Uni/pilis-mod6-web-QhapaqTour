import { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Navigation } from './Navigation/Navigation'

export const ProtectedRoutes = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      setCurrentUser(token)
    }
  }, [])

  return (
    currentUser
      ? <>
        <Navigation/>
        <Outlet />
      </>
      : <Navigate to="/login" />
  )
}
