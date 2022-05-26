import React from 'react'
import {FiTwitter} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
import {FiFacebook} from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
    <div className='footer_container'>
      <div className='quote_container'>
      <h4 className='quote'>"That Which You Believe Becomes Your World"</h4>
      <h5>*Richard Matheson*</h5>
    </div>

      <div className='footer_socials'>
        <a href='https://www.facebook.com/DJshortKAKE'><FiFacebook className='icons' /></a>
        <a href='https://www.instagram.com/djshortkake/'><FaInstagram className='icons' /></a>
        <a href='https://twitter.com/Ssquaredscp'><FiTwitter className='icons' /></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Stephanie Kirshner 2022</small>
      </div>
    </div>
    </footer>
  )
}

export default Footer


