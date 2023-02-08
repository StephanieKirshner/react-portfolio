import React from 'react'
import CTA from './CTA'
import meNiceHair from '../../assets/meNiceHair.jpg'
import HeaderSocials from './HeaderSocials'
import './Header.css'

const Header = () => {
  return (
   <header>
     <div className="container header__container">
       <h1>Stephanie Kirshner</h1>
       <h3>Full-Stack Developer</h3>
       <CTA />
       <HeaderSocials />

       <div className="me">
         <img src={meNiceHair} alt="Me" />
       </div>
     </div>
   </header>
  )
}

export default Header