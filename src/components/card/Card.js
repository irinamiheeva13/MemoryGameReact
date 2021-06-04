import React, { useEffect, useState } from 'react';
import './Card.css';

function Card({ image }) {
  const [flippedCard, setFlippedCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const [flip, setFlip] = useState(false);

  const toggleCard = () => {
    setFlip(!flip);
  };

  useEffect(() => {
    if (flippedCard < 2) return;

    const firstMatched = image[flippedCard[0]];
    const secondMatched = image[flippedCard[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (flippedCard.length === 2) {
      setTimeout(() => setFlippedCard([]), 1000);
    }
  });

  return (
    <div className={`card ${flip ? 'flip' : ''}`} onClick={toggleCard}>
      <div className="front"></div>
      <div className="back">
        <img src={image} alt="img" className="icon" />
      </div>
    </div>
  );
}

export default Card;
