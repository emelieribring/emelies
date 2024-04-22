import React from 'react';
import './contacts.css';

export default function Contacts() {
  return (
    <div className='contacts'>
      <div className='contact-info'>
        <div className='email'>
          <p className='head'>email</p>
          <p>emelieribring@hotmail.com</p>
        </div>
        <div className="phone">
          <p className='head'>phone</p>
          <p>073 735 35 00</p>
        </div>
        <div className="location">
          <p className='head'>location</p>
          <p>Stockholm</p>
        </div>
      </div>
    </div>
  )
}
