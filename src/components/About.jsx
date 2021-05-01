import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
const About = () => {
  useEffect(() => {
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750,
    })
    tl.add({
      targets: '.about h1',
      opacity: 1,
      delay: 300,
    }).add({
      targets: '.about p',
      opacity: 1,
    })
  })
  return (
    <div className='about'>
      <h1>
        <i className='tag'>{`<h1>`}</i>Who am I?
        <i className='tag'>{`</h1>`}</i>
      </h1>
      <p>
        <i className='tag'>{`<p>`}</i>front-end developer based in Georgia,
        Tbilisi. great passion for creating dynamic and intuitive user
        experiences. curious and open for learning new technologies and best
        practices. <br />
        <br />
        interested in entire frontend world and looking for great projects with
        positive people<i className='tag'>{`</p>`}</i>
      </p>
    </div>
  )
}

export default About
