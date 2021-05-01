import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='nav-container'>
      <ul className='nav-list'>
        <li className='list-item'>
          <Link to='/'>
            <span>
              {' '}
              <i className='tag'>{`<`}</i>
              home
              <i className='tag'>{`/>`}</i>
            </span>
          </Link>
        </li>
        <li className='list-item'>
          <Link to='/about'>
            <span>
              {' '}
              <i className='tag'>{`<`}</i>
              about
              <i className='tag'>{`/>`}</i>
            </span>
          </Link>
        </li>
        <li className='list-item'>
          <Link to='/projects'>
            <span>
              {' '}
              <i className='tag'>{`<`}</i>
              projects
              <i className='tag'>{`/>`}</i>
            </span>
          </Link>
        </li>
        <li className='list-item'>
          <Link to='/contact'>
            <span>
              {' '}
              <i className='tag'>{`<`}</i>
              contact
              <i className='tag'>{`/>`}</i>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
