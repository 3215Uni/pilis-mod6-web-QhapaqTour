import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

export const Navigation = () => {
  const { setCurrentUser } = useContext(UserContext)

  const handleLogout = () => {
    localStorage.removeItem('token')
    setCurrentUser(null)
  }

  return (
    <>
      <ul>
        <li><Link to='/dashboard'>Gana dinero conduciendo</Link></li>
        <li><Link to='/profile'>Gestionar cuenta</Link></li>
        <li><Link to='/profile'>Configuración</Link></li>
        <li><button onClick={handleLogout}>Cerrar sesión</button></li>
      </ul>
    </>
  )
}
