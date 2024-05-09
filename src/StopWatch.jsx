import React, { useState, useEffect } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

    
const formatTime = (totalSeconds) => {
    
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    return formattedTime;
};


  const handleStart = () => {
    setStart((prev) => !prev);
  };

  const handleReset = () => {
    setTime(0);
    setStart(false);
  };

  useEffect(() => {
    let timerId;
    if (start) {
      timerId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }
    return () => clearInterval(timerId);
  }, [start]);

  return (
    <>
      <h1>Stopwatch</h1>

      <div>
        <span>Time: </span>
        <span>{formatTime(time)}</span>
      </div>
      <br />
      <button onClick={handleStart}>{start ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
