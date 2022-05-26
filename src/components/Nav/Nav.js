import React from 'react'
import { NavLink} from 'react-router-dom'
import {RiHomeSmileLine} from 'react-icons/ri'
import {BiWinkSmile} from 'react-icons/bi'
import {TiFolderOpen} from 'react-icons/ti'
import {TiMessages} from 'react-icons/ti'
import './Nav.css'

const Nav = () => {
 
  return (
    <div>
    <nav>
      
      <NavLink to="/"><RiHomeSmileLine/></NavLink>
      <NavLink to="/About"><BiWinkSmile/></NavLink>
      <NavLink to="/Projects"><TiFolderOpen/></NavLink>
      <NavLink to="/Contact"><TiMessages/></NavLink>
      
    </nav>
    </div>
  )
}


export default Nav