import React from 'react'
import Project from './Project'
const Projects = () => {
  const todoUrl = 'https://github.com/NikkiDev/eAcademy-react-todo'
  const outsideUrl =
    'https://github.com/NikkiDev/eAcademy-popup-with-handling-outside-click'
  const contextUrl = 'https://github.com/NikkiDev/eAcademy-context-menu'
  const twitterUrl =
    'https://github.com/NikkiDev/eAcademy-imitated-twitter-posts'
  const profileUrl = 'https://github.com/NikkiDev/eAcademy-portfolio'

  return (
    <div className='projects'>
      <h1>projects done</h1>
      <Project url={todoUrl} name={'React To-Do'} />
      <Project url={outsideUrl} name={'React Outside Click'} />
      <Project url={contextUrl} name={'React Context-Menu'} />
      <Project url={twitterUrl} name={'React Twitter Post'} />
      <Project url={profileUrl} name={'React Twitter Post'} />
    </div>
  )
}

export default Projects
