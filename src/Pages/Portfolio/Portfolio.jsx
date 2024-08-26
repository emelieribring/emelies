import React, { useState } from 'react';
import './portfolio.css';
import Cards from '../../Components/cards/Cards';
import Website from '../../Components/websites/Website';

export default function Portfolio() {
  const [background, setBackground] = useState('defaultBackground'); // Håller koll på vilken bakgrund som ska visas

  const handleCardClick = (bg) => { // Funktion för att uppdatera bakgrunden
    setBackground(bg);
  };

  return (
    <div className='portfolio'>
      <Website background={background}/> 
      <Cards onCardClick={handleCardClick}/> 
    </div>
  );
}
