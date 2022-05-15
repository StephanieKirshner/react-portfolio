import React from 'react'
import './About.css'
import meCrimpHair from '../../assets/meCrimpHair.jpg'
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {BsBootstrap} from 'react-icons/bs'
import {IoLogoNodejs} from 'react-icons/io'
import {SiMongodb} from 'react-icons/si'
import {FaJira} from 'react-icons/fa'
import {SiWordpress} from 'react-icons/si'
import banyanLabs from '../../assets/banyanLabs.png'
import logo from '../../assets/logo.png'




const About = () => {
  return (
    <section id="About">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={meCrimpHair} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h5>Skills</h5>
              <AiOutlineHtml5 className='html' />
              <IoLogoCss3 className='css' />
              <IoLogoJavascript className='js' />
              <FaReact className='react' />
              <BsBootstrap className='bootstrap' />
              <IoLogoNodejs className='node' />
              <SiMongodb className='mongo' />
              <FaJira className='jira' />
              <SiWordpress className='wordpress' />
            </article>

            <article className='about__card'>
              <h5>Experience</h5>
              <img className="expImage" src={logo} alt="Persevere" />
              <br />
              <img className="expImage" src={banyanLabs} alt="Banyan Labs" />
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid.</p>
        </div>
      </div>
    </section>
  )
}

export default About