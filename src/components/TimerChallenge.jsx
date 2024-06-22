import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  
  const [remainingTime, setTimeRemaining] = useState(targetTime * 1000)

  const timerisActive = remainingTime > 0 && remainingTime < targetTime * 1000;
  
  if(remainingTime <=0){
    clearInterval(timer.current);
    dialog.current.open();
  }
  
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 10);
    }, 10);

    setTimerStarted(true);
  };

  const handleStop = () => {
    dialog.current.open();
    clearTimeout(timer.current);
  };

  const handleReset = ()=>{
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
    {<ResultModal 
    ref={dialog} 
    targetTime={targetTime} 
    remainingTime = {remainingTime}
    onReset = {handleReset}/>}

    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerisActive ? handleStop : handleStart}>
          {timerisActive ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerisActive ? "active" : undefined}>
        {timerisActive ? "Time is running" : "Time inactive"}
      </p>
    </section>
    </>
  );
}
