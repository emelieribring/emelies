import React from 'react';
import './sidebar.css';
import insta from '../../images/instagram.png';
import github from '../../images/github.png';
import linkedIn from '../../images/linkedin.png';
import logo from '../../images/erlogo.png';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <img className='sidebar-logo' src={logo} alt="logo" />
      <div className='icons'>
        <img className='icon' src={insta} alt="insta" />
        <img className='icon' src={github} alt="github" />
        <img className='icon' src={linkedIn} alt="linkedIn" />
      </div>
    </div>
  )
}
