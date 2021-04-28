import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import Contact from './Contact'
import Projects from './Projects'
const Home = () => {
  useEffect(() => {
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750,
    })
    tl.add({
      targets: 'h1',
      translateX: 0,
      opacity: 1,
    }).add({
      targets: 'h4',
      opacity: 1,
      delay: 500,
    })
  })
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
