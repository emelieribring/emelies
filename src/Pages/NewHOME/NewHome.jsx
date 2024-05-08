import React, { useState } from 'react';
import './NewHome.css';
import Navbar from '../../Components/Navbar/Navbar';
import NewMain from '../../Components/newMain/NewMain';
import Contacts from '../../Components/contacts/Contacts';
import NewSidebar from '../../Components/NewSidebar/NewSidebar';

export default function NewHome() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };


  return (
    <div className='newHome'>
         <NewSidebar/>
         <Navbar toggleVisibility={toggleVisibility}/>
         <NewMain isVisible={isVisible} />
         <Contacts/>
    </div>
  )
}
