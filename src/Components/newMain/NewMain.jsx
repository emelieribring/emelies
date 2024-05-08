import React, { useState, useEffect } from 'react';
import './newmain.css';
import 'animate.css';
import Lottie from 'lottie-react';
import arrowAni from '../../assets/arrow.json';

export default function NewMain({ isVisible }) {

  return (
    <div className='newmain'>
      <h1 className='animate__animated animate__fadeInLeft'>Emel<span className='i'>i</span>e R<span className='i'>i</span>bring</h1>
      <p className='animate__animated animate__fadeInLeft'>web developer</p>
      <div className="buttons">
        <button className="resume-btn animate__animated animate__fadeIn">resume</button>
        <button className="portfolio-btn animate__animated animate__fadeIn">portfolio</button>
      </div>
      {/*<p id='dude' className={isVisible ? 'show' : 'hide'}>Dude?</p>
      <Lottie id='arrowAni' className={isVisible ? 'show' : 'hide'} animationData={arrowAni} ></Lottie>
      <p id='here' className={isVisible ? 'show' : 'hide'}>Its right here?</p>*/}
    </div>
  )
}
