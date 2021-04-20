import React from 'react'
import Project from './Project'
const Projects = () => {
  const projects = [
    {
      name: 'React To-Do',
      github: 'https://github.com/NikkiDev/eAcademy-react-todo',
      netlify: 'https://eacademy-react-todo.netlify.app/',
      img:
        'https://d33wubrfki0l68.cloudfront.net/607ccf7f21dae36704f5da19/screenshot_2021-04-19-00-33-30-0000.png',
    },
    {
      name: 'React Outside Click',
      github:
        'https://github.com/NikkiDev/eAcademy-popup-with-handling-outside-click',
      netlify: 'https://eacademy-react-outside-click.netlify.app',
      img:
        'https://d33wubrfki0l68.cloudfront.net/607cd37939599b369e421e3e/screenshot_2021-04-19-00-50-06-0000.png',
    },
    {
      name: 'React Context-Menu',
      github: 'https://github.com/NikkiDev/eAcademy-context-menu',
      netlify: 'https://eacademy-react-context-menu.netlify.app',
      img:
        'https://d33wubrfki0l68.cloudfront.net/607cd37939599b369e421e3e/screenshot_2021-04-19-00-50-06-0000.png',
    },
    {
      name: 'React Twitter Post',
      github: 'https://github.com/NikkiDev/eAcademy-imitated-twitter-posts',
      img:
        'https://d33wubrfki0l68.cloudfront.net/607cd37939599b369e421e3e/screenshot_2021-04-19-00-50-06-0000.png',
    },
    {
      name: 'React Portfolio',
      github: 'https://github.com/NikkiDev/eAcademy-portfolio',
      img:
        'https://d33wubrfki0l68.cloudfront.net/607cd37939599b369e421e3e/screenshot_2021-04-19-00-50-06-0000.png',
    },
  ]

  return (
    <div className='projects'>
      <h1>recent works</h1>
      <div className='project-container'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <Project
                urlGit={project.github}
                urlNet={project.netlify}
                name={project.name}
                img={project.img}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
