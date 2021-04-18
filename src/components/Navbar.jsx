import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='nav-container'>
      <ul className='nav-list'>
        <li className='list-item'>
          <Link to='/'>
            <span>home</span>
          </Link>
        </li>
        <li className='list-item'>
          <Link to='/about'>
            <span>about me</span>
          </Link>
        </li>
        <li className='list-item'>
          <Link to='/projects'>
            <span>projects</span>
          </Link>
        </li>
        <li className='list-item'>
          <Link to='/contact'>
            <span>contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
