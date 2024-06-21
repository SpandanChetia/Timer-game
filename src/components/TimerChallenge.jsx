import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  
  const [remainingTime, setTimeRemaining] = useState(targetTime * 1000)

  const timerisActive = remainingTime > 0 && remainingTime < targetTime * 1000;
  
  if(timeRemaining <=0){
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
  }
  
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 10);
    }, 10);

    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
    {<ResultModal ref={dialog} targetTime={targetTime} result="lost"/>}
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running" : "Time inactive"}
      </p>
    </section>
    </>
  );
}
