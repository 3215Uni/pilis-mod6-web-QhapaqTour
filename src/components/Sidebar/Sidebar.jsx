import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaMoneyBill } from 'react-icons/fa'
import { GrSettingsOption } from 'react-icons/gr'
import { IoMdInformationCircle } from 'react-icons/io'
import Message from '../../assets/message.png'
import './Sidebar.css'
import { UserContext } from '../../context/UserContext'

export const Sidebar = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <aside className='sidebar'>
      <h5 className='nombre'>{currentUser.username}</h5>
      <nav>
        <ul>
          <li className='lista'>
            <Link to='/places'>
              <GrSettingsOption />
              Configuración
            </Link>
          </li>
          <li className='lista'>
            <Link to='/places'>
              <img src={Message} alt="message" style={{ width: '1em', height: '1em' }} />
              Mensaje
            </Link>
          </li>
          <li className='lista'>
            <Link to='/dashboard'>
              <FaMoneyBill />
              Gana dinero conduciendo
            </Link>
          </li>
          <li className='lista'>
            <Link to='/profile'>
              <BsFillPersonFill />
              Gestionar cuenta
            </Link>
          </li>
          <li className='lista'>
            <Link to='/places'>
              <IoMdInformationCircle />
              Legal
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
