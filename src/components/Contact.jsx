import React, { useEffect } from 'react'
import { SiLinkedin, SiFacebook, SiGithub, SiGmail } from 'react-icons/si'
import anime from 'animejs/lib/anime.es.js'
const Contact = () => {
  useEffect(() => {
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750,
    })
    tl.add({
      targets: 'h1',
      opacity: 1,
    })
      .add({
        targets: 'p',
        opacity: 1,
        delay: 500,
      })
      .add({
        targets: '.contact-icon',
        opacity: 1,
        delay: 200,
      })
  })
  return (
    <div className='contact'>
      <h1>
        <i className='tag'>{`<h1>`}</i>
        Contact Me
        <i className='tag'>{`<h1/>`}</i>
      </h1>
      <p>
        <i className='tag'>{`<p>`}</i>I’m interested in full-time opportunities
        – especially ambitious or large projects. However, if you have other
        request or question, don’t hesitate to contact me.
        <i className='tag'>{`</p>`}</i>
      </p>
      <div className='icon-container'>
        <div className='contact-icon'>
          <a href='https://www.linkedin.com/in/nikoloz-chachanidze-6b2438148/'>
            <div className='icon'>
              <SiLinkedin />
            </div>
          </a>
        </div>
        <div className='contact-icon'>
          <a href='https://www.facebook.com/NikkiCorsten'>
            <div className='icon'>
              <SiFacebook />
            </div>
          </a>
        </div>
        <div className='contact-icon'>
          <a href='https://github.com/NikkiDev'>
            <div className='icon'>
              <SiGithub />
            </div>
          </a>
        </div>
        <div className='contact-icon'>
          <a href='mailto:gameworlddeveloper@gmail.com'>
            <div className='icon'>
              <SiGmail />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
