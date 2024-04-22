import React from 'react';
import './main.css';
import erLogo from '../../images/erdesign.png';
import techfemale from '../../images/webbtjej.png';

export default function Main() {
  return (
    <div className='main-content'>
        <div className="main-left">
            <div className='main-left-text'>
                <p id='hi'>Hi there!</p>
                <h1 id='iamEme'>I am Emel<span>i</span>e</h1>
                <p id='daytime'>I am a programmer at daytime</p>
                <p id='night'>& work as a proffesional ninja at night.</p>
                <button className='work-with-me-btn'>work with me</button>
            </div>
        </div>
        <div className='main-right'>
            <img className='techfemale' src={techfemale} alt="" />
            <div className='main-right-logo'>
                <img className='erLogo' src={erLogo} alt="" />
                <div className='main-line'></div>
            </div>
        </div>
    </div>
  )
}
