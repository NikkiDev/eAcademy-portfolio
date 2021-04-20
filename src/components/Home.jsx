import React from 'react'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
const Home = () => {
  return (
    <div>
      <div className='home'>
        <h1>Nikoloz Chachanidze</h1>
        <h4>{`<front-end developer/>`}</h4>
      </div>

      <Projects />
      <Contact />
    </div>
  )
}

export default Home
