import React from 'react';
import './home.css';
import 'animate.css';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Contacts from '../../Components/contacts/Contacts';
import Main from '../../Components/Main/Main';


export default function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='main'>
        <Navbar/>
        <Main/>
        <Contacts/>
      </div>
    </div>
  )
}
