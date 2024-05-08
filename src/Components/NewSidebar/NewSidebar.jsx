import React from 'react';
import './newsidebar.css';
import insta from '../../images/insta.png';
import github from '../../images/github.png';
import linkedIn from '../../images/linkedin.png';

export default function NewSidebar() {
  return (
    <div className='newsidebar'>
        <a href="https://www.instagram.com/emelieeeii/"><img className='media' src={insta} alt="insta" /></a>
        <a href="https://github.com/emelieribring"><img className='media github' src={github} alt="github" /></a>
        <a href="https://www.linkedin.com/in/emelie-ribring-076a81250/"><img className='media' src={linkedIn} alt="linkedIn" /></a>
    </div>
  )
}
