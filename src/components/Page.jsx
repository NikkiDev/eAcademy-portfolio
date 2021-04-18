import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import './Portfolio.scss'
const Page = () => {
  return (
    <Router>
      <Navbar />
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
