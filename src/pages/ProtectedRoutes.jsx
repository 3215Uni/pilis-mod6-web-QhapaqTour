import { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Sidebar, Header } from '../components/index'

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
        <Header/>
        <div className='container'>
          <Sidebar />
          <Outlet />
        </div>
      </>
      : <Navigate to="/login" />
  )
}
