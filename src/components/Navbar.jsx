import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js'

const Navbar = (props) => {
  const ref = useRef()

  const click = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      props.setIsOpen(false)
    }
  }
  useEffect(() => {
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750,
    })
    tl.add({
      targets: 'li',
      opacity: 1,
      delay: anime.stagger(100),
    })
    window.addEventListener('click', click)
  })
  return (
    <nav className='nav-container'>
      <ul ref={ref} className='nav-list'>
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
