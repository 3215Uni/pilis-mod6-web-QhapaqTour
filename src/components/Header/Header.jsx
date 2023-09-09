import React, { useContext, useEffect, useRef, useState } from 'react'
import './header.css'
import Avatar from '../../assets/avatar.svg'
import { UserContext } from '../../context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export const Header = () => {
  const { setCurrentUser,currentUser } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef(null)
  const dropdownRef = useRef(null)
  const navigate = useNavigate();

  const handleLogout = () => {
    closeDropdown()
    Cookies.remove('token')
    setCurrentUser(null)
    navigate('/login');
  }

  const closeDropdown = () => setIsOpen(false)
  const handleDropdown = (event) => {
    event.stopPropagation()
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target !== buttonRef.current && event.target !== dropdownRef.current) {
        closeDropdown()
      }
    }

    const handleKey = (event) => {
      if (event.key === 'Escape') {
        closeDropdown()
      }
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKey)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  return (
    <header>
      <div className='header-content'>
        <h1 className='title'>QhapaqTour</h1>
        <div className='dropdown-container'>
          <button ref={buttonRef} onClick={handleDropdown} className='button-user'>
            <img
              className='image-avatar'
              src={Avatar}
              alt='avatar'
            />
          </button>
          <ul
            ref={dropdownRef}
            onClick={(event) => event.stopPropagation()}
            className={`dropdown ${isOpen ? 'opacity-1' : 'opacity-0'}`}
          >
            <div>
              <h4>{currentUser.username}</h4>
              <p>Amir Sumaqmi</p>
            </div>
            <li><Link to='/profile' onClick={closeDropdown}>Mi perfil</Link></li>
            <li>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </li>
          </ul>
        </div>
      </div>
      <svg className='shape' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 82.7289L60 50.4999C118 25.5 250 -16.5374 370 7.49998C490 31.5374 600 88.7382 720 112.776C840 136.813 960 88.7382 1080 82.7289C1200 76.7195 1320 112.776 1380 130.804L1440 148.832V160H1380C1320 160 1200 160 1080 160C960 160 840 160 720 160C600 160 480 160 360 160C240 160 120 160 60 160H0V82.7289Z" fill="white" />
      </svg>
    </header>
  )
}
