import React from 'react';
import './websites.css';

export default function Website({ background }) { // Ta emot background som prop
  return (
    <div className='websites' style={{ backgroundImage: `url(${background})` }}>Website</div>
  );
}
