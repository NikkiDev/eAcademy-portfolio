import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { IoMdMenu } from 'react-icons/io'
import anime from 'animejs/lib/anime.es.js'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import './Portfolio.scss'
const Page = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    anime({
      targets: '.burger',
      opacity: 1,
      delay: 200,
    })
  })
  return (
    <Router>
      {isOpen ? (
        <Navbar setIsOpen={setIsOpen} />
      ) : (
        <button className='burger' onClick={() => setIsOpen(true)}>
          <IoMdMenu />
        </button>
      )}

      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/projects'>
        <Projects />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </Router>
  )
}

export default Page
