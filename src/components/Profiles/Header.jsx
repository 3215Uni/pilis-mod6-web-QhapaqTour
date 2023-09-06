import React from 'react'
import './header.css';
import Avatar from '../../assets/avatar.svg';


export const Header = () => {
  return (
    <header>
      <p
      className='titulo'
      >QhapaqTour</p>
      <img 
      className='imagen-avatar'
      src={Avatar}
      alt='avatar'
      />
    </header>
  )
}
