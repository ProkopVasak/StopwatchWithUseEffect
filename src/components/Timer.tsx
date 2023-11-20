import React, { useEffect, useState } from 'react';

const Timer: React.FC = () => {
    const [time, setTime] = useState<number>(0)
    const [timerActive, setTimerActive] = useState<boolean>(false)
    const [intervalId, setIntervalId] = useState<number | null>(null)
  
    useEffect(() => {
        console.log("komponenta aktivní")
      if (timerActive && intervalId === null) {
        const id = window.setInterval(() => {
          setTime((prevTime) => prevTime + 2); 
        }, 2000);
  
        setIntervalId(id);
      } else if (!timerActive && intervalId !== null) {
        window.clearInterval(intervalId);
        setIntervalId(null);
      }
  
      return () => {
        console.log("komponenta odpojena")
        if (intervalId !== null) {
          window.clearInterval(intervalId);
        }
      };
    }, [timerActive, intervalId]);
  
    const toggleTimer = () => {
      setTimerActive(!timerActive); 
    };
  
    return (
      <div>
        <div>{time}</div>
        <button onClick={toggleTimer}>
          {timerActive ? 'Zastavit' : 'Start'}
        </button>
      </div>
    );
  };

export default Timer