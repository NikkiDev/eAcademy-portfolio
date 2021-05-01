import React, { useEffect } from 'react'
import Project from './Project'
import anime from 'animejs/lib/anime.es.js'
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
      img: 'https://i2.paste.pics/90f859142fbe4d5244c508c79d822fdd.png',
    },
    {
      name: 'React Context-Menu',
      github: 'https://github.com/NikkiDev/eAcademy-context-menu',
      netlify: 'https://eacademy-react-context-menu.netlify.app',
      img: 'https://i2.paste.pics/cacad54533aec9aba741e3a1b3ba28bc.png',
    },
    {
      name: 'React Twitter Post',
      github: 'https://github.com/NikkiDev/eAcademy-imitated-twitter-posts',
      img:
        'https://d33wubrfki0l68.cloudfront.net/6090334b68a5b40da9065eb1/screenshot_2021-05-03-17-32-27-0000.png',
    },
    {
      name: 'React Portfolio',
      github: 'https://github.com/NikkiDev/eAcademy-portfolio',
      img:
        'https://d33wubrfki0l68.cloudfront.net/608d13e2425be5f93eca9c44/screenshot_2021-05-01-08-41-22-0000.png',
    },
    {
      name: 'React Quizz App',
      github: 'https://github.com/NikkiDev/eAcademy-quiz-app-final-project',
      img:
        'https://d33wubrfki0l68.cloudfront.net/608ab99d32540d3bd1f73bdc/screenshot_2021-04-29-13-52-07-0000.png',
    },
  ]
  useEffect(() => {
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750,
    })
    tl.add({
      targets: 'h1',
      opacity: 1,
    })
    tl.add({
      targets: '.project-container .proj',
      opacity: 1,
      delay: anime.stagger(125),
    })
  }, [])

  return (
    <div className='projects'>
      <h1>
        <i className='tag'>{`<h1>`}</i>
        Recent Works
        <i className='tag'>{`<h1/>`}</i>
      </h1>
      <div className='project-container'>
        {projects.map((project, idx) => {
          return (
            <div className='proj' key={idx}>
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
