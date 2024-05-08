import React, { useState } from 'react';

function App() {
  // State för att hantera om andra sidan är aktiv
  const [isLocked, setIsLocked] = useState(false);

  const scrollToSecondPage = () => {
    // Skrollar till andra sidan
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });

    // Låser skrollning efter att skrollen är klar
    setTimeout(() => {
      setIsLocked(true);
    }, 1000); // Justera tiden efter din skroll-hastighet
  };

  return (
    <div style={{ overflow: isLocked ? 'hidden' : 'auto' }}>
      <button onClick={scrollToSecondPage}>Gå till nästa sida</button>
      <div style={{ width: '100vw', height: '100vh', backgroundColor: 'blue' }}>Första Sida</div>
      <div style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}>Andra Sida</div>
    </div>
  );
}

export default App;
