import React from 'react';
import './contact.css';
import Navbar from '../../Components/Navbar/Navbar';

export default function Contact() {
  return (
    <div className='contact'>
        <Navbar/>
        <div className='contactDiv'>
            <div className='contactLinks'>Github</div>
            <div className='contactLinks'>LinkedIn</div>
            <div className='contactLinks'>Instagram</div>
            <div className='contactLinks'>X</div>
        </div>
    </div>
  )
}
