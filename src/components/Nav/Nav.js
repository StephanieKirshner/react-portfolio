import React, {Link, useState, setState} from 'react'
import './Nav.css'
import {RiHomeSmileLine} from 'react-icons/ri'
import {BiWinkSmile} from 'react-icons/bi'
import {TiFolderOpen} from 'react-icons/ti'
import {TiMessages} from 'react-icons/ti'


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
 
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHomeSmileLine/></a>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><BiWinkSmile/></a>
      <a href="#Projects" onClick={() => setActiveNav('#Projects')} className={activeNav === '#Projects' ? 'active' : ''}><TiFolderOpen/></a>
      <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><TiMessages/></a>
    </nav>
  )
}

export default Nav