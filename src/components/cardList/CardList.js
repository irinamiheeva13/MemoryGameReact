import React, { useEffect, useState } from 'react';
import './CardList.css';

function CardList({ images }) {
  const [flippedCard, setFlippedCard] = useState([]);
  const [matched, setMatched] = useState([]);

  const toggleCard = (index) => {
    setFlippedCard((flipped) => [...flipped, index]);
  };

  useEffect(() => {
    if (flippedCard < 2) return;

    const firstMatched = images[flippedCard[0]];
    const secondMatched = images[flippedCard[1]];

    if (secondMatched && firstMatched.descr === secondMatched.descr) {
      setMatched([...matched, firstMatched.descr]);
    }

    if (flippedCard.length === 2) {
      setTimeout(() => setFlippedCard([]), 1000);
    }
  }, [flippedCard]);

  return (
    <div className="card-grid">
      {images.map((image, index) => {
        let flip = false;

        if (flippedCard.includes(index)) {
          flip = true;
        }

        if (matched.includes(image.descr)) {
          flip = true;
        }
        return (
          <div
            className={`card ${flip ? 'flip' : ''}`}
            key={image.id}
            onClick={() => toggleCard(index)}
          >
            <div className="front"></div>
            <div className="back">
              <img src={image.img} alt="img" className="icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardList;
