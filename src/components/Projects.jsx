import React from 'react'
import Project from './Project'
const Projects = () => {
  const projects = [
    {
      name: 'React To-Do',
      url: 'https://github.com/NikkiDev/eAcademy-react-todo',
    },
    {
      name: 'React Outside Click',
      url:
        'https://github.com/NikkiDev/eAcademy-popup-with-handling-outside-click',
    },
    {
      name: 'React Context-Menu',
      url: 'https://github.com/NikkiDev/eAcademy-context-menu',
    },
    {
      name: 'React Twitter Post',
      url: 'https://github.com/NikkiDev/eAcademy-imitated-twitter-posts',
    },
    {
      name: 'React Portfolio',
      url: 'https://github.com/NikkiDev/eAcademy-portfolio',
    },
  ]

  return (
    <div className='projects'>
      <h1>projects done</h1>
      {projects.map((project) => {
        return <Project url={project.url} name={project.name} />
      })}
    </div>
  )
}

export default Projects
