import React, { useContext } from 'react'
import { BsFillPersonFill,BsFillStarFill,BsCalendar2Fill } from 'react-icons/bs'
import { FaMoneyBill,FaRoute,FaMapSigns } from 'react-icons/fa'
import { GrSettingsOption } from 'react-icons/gr'
import { IoMdInformationCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import './Sidebar.css'

export const Sidebar = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <aside className='sidebar'>
      <h5 className='nombre'>{currentUser.apellido} {currentUser.nombre}</h5>
      <nav>
        <ul>
          <li className='lista'>
            <Link to='/places'>
              <FaMapSigns />
              Gestionar Lugares
            </Link>
          </li>
          <li className='lista'>
            <Link to='/dashboard'>
              <BsCalendar2Fill />
              Gestionar Reservas
            </Link>
          </li>
          <li className='lista'>
            <Link to='/recorrido'>
              <FaRoute />
              Gestionar Recorrido
            </Link>
          </li>
          <li className='lista'>
            <Link to='/places'>
              <BsFillStarFill />
              Valoraciones
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
