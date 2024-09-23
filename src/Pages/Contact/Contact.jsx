import React, { useState } from 'react';
import './contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import insta from '../../images/insta.png';
import github from '../../images/github.png';
import linkedIn from '../../images/linkedin.png';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Förhindra att sidan laddas om
    const form = event.target;
    
    const data = new FormData(form);
    const response = await fetch('https://formspree.io/f/xrbzwrgv', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: data,
    });

    if (response.ok) {
      form.reset(); // Rensar formuläret efter framgångsrik inlämning
      setStatus('Tack för ditt meddelande!');
    } else {
      setStatus('Något gick fel, försök igen senare.');
    }
  };

  return (
    <div className='contact'>
      <Navbar/>
      <div className='contactDiv'>
        <div className='letsTalk'>
          <p className='headline-talk'>Let's talk!</p>
          <p className='under-talk'>📧 &nbsp; emelieribring@hotmail.com <br />
          📞 &nbsp;  073 735 35 00</p>
          <div className='linksToMe'>
          <a href="https://www.instagram.com/emelieeeii/"><img className='media' src={insta} alt="insta" /></a>
        <a href="https://github.com/emelieribring"><img className='media github' src={github} alt="github" /></a>
        <a href="https://www.linkedin.com/in/emelie-ribring-076a81250/"><img className='media' src={linkedIn} alt="linkedIn" /></a>
          </div>
        </div>
        <div className='form-holder'>
          <form onSubmit={handleSubmit}>
            <div>
              <input placeholder='name' type="text" name="name" id="name" required />
              <input placeholder='email' type="email" name="email" id="email" required />
            </div>
            <div>
              <input placeholder='message' type="text" name="message" id="message" required />
            </div>
            <button className='btn-send' type="submit">Send</button>
          </form>
          {status && <p className="status-message">{status}</p>} {/* Visar statusmeddelandet */}
        </div>
      </div>
    </div>
  );
}
