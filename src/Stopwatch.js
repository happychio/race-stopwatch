import React, { useState, useEffect } from 'react';

export function Stopwatch({ raceDistance, onAddLap }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000); // Update time by one second
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const toggle = () => setIsRunning(!isRunning);

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const recordLap = () => {
    if (isRunning) {
      onAddLap(raceDistance, formatTime(time)); // Include raceDistance in the lap record
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000).toString().padStart(2, '0');
    const seconds = ((time % 60000) / 1000).toFixed(0).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  // Determine the theme based on the raceDistance
  const themeClass = `stopwatch ${raceDistance === "5km" ? "orange-theme" :
                     raceDistance === "3km" ? "blue-theme" : "pink-theme"}`;

  return (
    <div className={themeClass}>
      <span className="distance">{raceDistance}</span>
      <h2 className="time-display">{formatTime(time)}</h2>
      <button onClick={toggle} className={isRunning ? "button stop" : "button start"}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={reset} disabled={isRunning} className="button reset">Reset</button>
      <button onClick={recordLap} disabled={!isRunning} className="button lap">Lap</button>
    </div>
  );
}
