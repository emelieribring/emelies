import React from 'react';
import './newmain.css';
import 'animate.css';

export default function NewMain({ isVisible }) {

  return (
    <div className='newmain'>
      <h1 className='animate__animated animate__fadeInLeft'>Emel<span className='i'>i</span>e R<span className='i'>i</span>bring</h1>
      <p className='animate__animated animate__fadeInLeft'>web developer</p>
      <div className="buttons">
      <button class="animated-button animate__animated animate__fadeIn">
        <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
        <span class="text">resume</span>
        <span class="circle"></span>
        <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
      </button>
      <button class="animated-button animate__animated animate__fadeIn">
        <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
        <span class="text">portfolio</span>
        <span class="circle"></span>
        <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
      </button>

         {/*<button className="resume-btn animate__animated animate__fadeIn">resume</button>
        <button className="portfolio-btn animate__animated animate__fadeIn">portfolio</button>*/}
      </div>
      {/*<p id='dude' className={isVisible ? 'show' : 'hide'}>Dude?</p>
      <Lottie id='arrowAni' className={isVisible ? 'show' : 'hide'} animationData={arrowAni} ></Lottie>
      <p id='here' className={isVisible ? 'show' : 'hide'}>Its right here?</p>*/}
    </div>
  )
}
