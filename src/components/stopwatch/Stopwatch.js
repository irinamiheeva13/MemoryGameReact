import React from 'react';
import './Stopwatch.css';

function Stopwatch({
  time,
  setTime,
  isActive,
  setIsActive,
  increment,
  isPaused,
  setIsPaused,
}) {
  const formatTime = () => {
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getSeconds = `0${time % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);

    increment.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
  };

  return (
    <div className="count">
      <div className="count_stopwatch">{formatTime()}</div>

      {!isActive && !isPaused ? (
        <button className="count_button" onClick={handleStart}>
          Start
        </button>
      ) : isPaused ? (
        <button className="count_button" onClick={handlePause}>
          Pause
        </button>
      ) : (
        <button className="count_button" onClick={handleResume}>
          Resume
        </button>
      )}
      <button className="count_button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
