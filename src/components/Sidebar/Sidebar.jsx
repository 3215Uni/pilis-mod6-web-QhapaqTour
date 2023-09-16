import React, { useContext } from 'react'
import { BsFillStarFill, BsCalendar2Fill } from 'react-icons/bs'
import { FaRoute, FaMapSigns } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
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
            <NavLink to='/places' className={({ isActive }) => isActive ? 'active' : ''}>
              <FaMapSigns />
              Gestionar Lugares
            </NavLink>
          </li>
          <li className='lista'>
            <NavLink to='/reservas' className={({ isActive }) => isActive ? 'active' : ''}>
              <BsCalendar2Fill />
              Gestionar Reservas
            </NavLink>
          </li>
          <li className='lista'>
            <NavLink to='/recorrido' className={({ isActive }) => isActive ? 'active' : ''}>
              <FaRoute />
              Gestionar Recorridos
            </NavLink>
          </li>
          <li className='lista'>
            <NavLink to='/valoracion' className={({ isActive }) => isActive ? 'active' : ''}>
              <BsFillStarFill />
              Valoraciones
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
