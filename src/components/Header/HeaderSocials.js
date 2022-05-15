import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/stephanie-cook-4b22bb218/" target="_blank"><FiLinkedin className='social__icon'/></a>
        <a href="https://github.com/StephanieKirshner" target="_blank"><BsGithub className='social__icon'/></a>
    </div>
  )
}

export default HeaderSocials