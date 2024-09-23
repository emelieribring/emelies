import React from 'react';
import './navbar.css';
import teleIcon from '../../images/tele-icon.png';

export default function Navbar({toggleVisibility}) {

  return (
    <nav className='navbar'>
      <ul>
        <a href="/"> <li>home</li></a>
        <a href="/portfolio"> <li>portfolio</li></a>
        <a href="/contact"> <li>contact</li></a>
      </ul>
      <p><img className='tele-icon' src={teleIcon} alt="" /> +46 73 735 35 00</p>
    </nav>
  )
}
