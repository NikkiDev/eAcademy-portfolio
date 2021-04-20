import React from 'react'
import { SiLinkedin, SiFacebook, SiGithub, SiGmail } from 'react-icons/si'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-icon'>
        <a href='https://www.linkedin.com/in/nikoloz-chachanidze-6b2438148/'>
          <SiLinkedin />
        </a>
      </div>
      <div className='contact-icon'>
        <a href='https://www.facebook.com/NikkiCorsten'>
          <SiFacebook />
        </a>
      </div>
      <div className='contact-icon'>
        <a href='https://github.com/NikkiDev'>
          <SiGithub />
        </a>
      </div>
      <div className='contact-icon'>
        <a href='mailto:gameworlddeveloper@gmail.com'>
          <SiGmail />
        </a>
      </div>
    </div>
  )
}

export default Contact
