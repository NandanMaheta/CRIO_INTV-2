import React, { useState, useEffect } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedMinutes = minutes < 1 ? "0" : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
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
        <span>Time: {formatTime(time)} </span>
      </div>

      <button onClick={handleStart}>{start ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
