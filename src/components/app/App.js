import React, { useState, useRef } from 'react';
import './App.css';
import CardList from '../cardList/CardList';
import icons from '../icons/icons';
import Stopwatch from '../stopwatch/Stopwatch';

function App() {
  const images = icons;
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);

  return (
    <div className="app">
      <div className="header">
        <h1>Find a pair</h1>
        <Stopwatch
          time={time}
          setTime={setTime}
          isActive={isActive}
          setIsActive={setIsActive}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          increment={increment}
        />
        <CardList images={images} />
      </div>
    </div>
  );
}

export default App;
