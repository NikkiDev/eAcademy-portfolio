import React from 'react'
import { SiNetlify, SiGithub } from 'react-icons/si'
const Project = (props) => {
  return (
    <div className='project'>
      <h3>{props.name}</h3>

      <div className='project-img'>
        <a href={props.urlNet}>
          <img src={props.img} alt='some' />
        </a>
      </div>
      <a href={props.urlNet}>
        <span className='project-icons'>
          <SiNetlify />
        </span>
        <p>Live Demo</p>
      </a>
      <a href={props.urlGit}>
        <span className='project-icons'>
          <SiGithub />
        </span>
        <p>Source</p>
      </a>
    </div>
  )
}

export default Project
