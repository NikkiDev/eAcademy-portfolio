import React from 'react'

const Project = (props) => {
  return (
    <div className='project'>
      <a href={props.url}>{props.name}</a>
    </div>
  )
}

export default Project
