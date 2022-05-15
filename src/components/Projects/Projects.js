import React from 'react'
import './Projects.css'
import saCircleLogo from '../../assets/saCircleLogo.png'
import exTracker from '../../assets/exTracker.png'
import helpMehelpU from '../../assets/helpMehelpU.png'
import theDripProject from '../../assets/theDripProject.png'


const data = [
  {
    id: 1,
    image: saCircleLogo,
    title: 'The Semi-Colon Pro;ect',
    github: 'https://github.com/StephanieKirshner/thesemicolonproject',
    demo: 'https://thesemicolonproject.org/'
  },
  {
    id: 2,
    image: helpMehelpU,
    title: 'helpMehelpU',
    github: 'https://github.com',
    demo: 'https://enterurlhere.com'
  },
  {
    id: 3,
    image: exTracker,
    title: 'Exercise Tracker',
    github: 'https://github.com',
    demo: 'https://enterurlhere.com'
  },
  {
    id: 4,
    image: theDripProject,
    title: 'The Drip Project',
    github: 'https://github.com',
    demo: ''
  },
  {
    id: 5,
    image: theDripProject,
    title: 'The Drip Project',
    github: 'https://github.com',
    demo: ''
  },
  {
    id: 6,
    image: theDripProject,
    title: 'The Drip Project',
    github: 'https://github.com',
    demo: ''
  }
]


const Projects = () => {
  return (
    <section id="Projects">
      <h2>Projects I've Worked On</h2>

      <div className='container projects__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='projects__item'>
          <div className='projects__item-image'>
            <img className="proj-image" src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='projects__item-cta'>
            <a href={github} className='btn pi-cta' target="_blank">Github</a>
            <a href={demo} className='btn pi-cta' target="_blank">Live Demo</a>
            </div>
        </article>
            )
          })
        }

        {/* <article className='projects__item'>
          <div className='projects__item-image'>
            <img className="proj-image" src={saCircleLogo} alt="Semi-Colon Project" />
          </div>
          <h3>The Semi-Colon Pro;ect</h3>
          <div className='projects__item-cta'>
            <a href="https://github.com" className='btn'>Github</a>
            <a href="" className='btn' target="_blank">Live Demo</a>
            </div>
        </article> */}
      </div>

      {/* <div className='container projects__container'>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img className="proj-image" src={helpMehelpU} alt="helpMehelpU" />
          </div>
          <h3>helpMehelpU</h3>
          <div className='projects__item-cta'>
          <a href="https://github.com" className='btn'>Github</a>
            <a href="" className='btn' target="_blank">Live Demo</a>
            </div>
        </article>
      </div>

      <div className='container projects__container'>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img className="proj-image" src={exTracker} alt="Exercise Tracker" />
          </div>
          <h3>Exercise Tracker</h3>
          <div className='projects__item-cta'>
          <a href="https://github.com" className='btn'>Github</a>
            <a href="" className='btn' target="_blank">Live Demo</a>
            </div>
        </article>
      </div>

      <div className='container projects__container'>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img className="proj-image" src={theDripProject} alt="The Drip Project" />
          </div>
          <h3>The Drip Project</h3>
          <div className='projects__item-cta'>
          <a href="https://github.com" className='btn'>Github</a>
            <a href="" className='btn' target="_blank">Live Demo</a>
            </div>
        </article>
      </div> */}
    </section>
  )
}

export default Projects