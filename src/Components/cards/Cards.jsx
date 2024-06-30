import React, { useState } from 'react';
import './cards.css';
import wildlife from '../../images/wildlife.png';
import flowerspace from '../../images/flowerspace.png';
import ai from '../../images/aiatom.png';
import coinKing from '../../images/coinking.png';

export default function Cards({ onCardClick }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCards = () => {
    setIsOpen(!isOpen);
  };

  // Dynamisk klass beroende på om korten är öppna eller stängda
  const cardsClassName = isOpen ? 'cards card-shown' : 'cards card-hidden';

  return (
    <div className={cardsClassName} style={{width: isOpen ? '40%' : '50px'}}>
        <button className='closeOpenBtn' onClick={toggleCards}>{isOpen ? '❰' : '❱'}</button>
        

<div className="card"></div>
    <div className='cardsNavbar'>
      <ul>
        <li>home</li>
        <li>portfolio</li>
        <li>contact</li>
      </ul>
    </div>
        <div className="card">
            <div className="card-text">
          
            </div>
        </div>
        <div className="card" onClick={() => onCardClick(wildlife)}>
            <div className="card-text">
                <h3>WILDLIFE DESIGN</h3>
                <p>react project</p>
            </div>
        </div>
        <div className="card" onClick={() => onCardClick(flowerspace)}>
            <div className="card-text">
                <h3>FLOWER-SPACE</h3>
                <p>react project</p>
            </div>
        </div>
        <div className="card" onClick={() => onCardClick(ai)}>
            <div className="card-text">
                <h3>AI MED ATOM</h3>
                <p>react project</p>
            </div>
        </div>
        <div className="card" onClick={() => onCardClick(coinKing)}>
            <div className="card-text">
                <h3>COIN KING</h3>
                <p>react project</p>
            </div>
        </div>
        <div className="card" onClick={() => onCardClick(wildlife)}>
            <div className="card-text">
                <h3>AI MED ATOM</h3>
                <p>react project</p>
            </div>
        </div>
        <div className="card" onClick={() => onCardClick(flowerspace)}>
            <div className="card-text">
                <h3>AI MED ATOM</h3>
                <p>react project</p>
            </div>
        </div>
    </div>
  );
}


