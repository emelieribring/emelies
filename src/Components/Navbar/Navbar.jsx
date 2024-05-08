import React from 'react';
import './navbar.css';
import teleIcon from '../../images/tele-icon.png';

export default function Navbar({toggleVisibility}) {

  return (
    <div className='navbar'>
      <ul>
        <li>home</li>
        <li>portfolio</li>
        <li onClick={toggleVisibility}>contact</li>
      </ul>
      <p><img className='tele-icon' src={teleIcon} alt="" /> +73 735 35 00</p>
    </div>
  )
}
