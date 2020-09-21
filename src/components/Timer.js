import React, { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(30);
    const [isActive, setIsActive] = useState(true);

   /* function toggle() {
       setIsActive(!isActive);
     } */
      function reset() {
        setTime(30);
        setIsActive(false);
      }
       
        useEffect(() => {
        let interval = null;
        console.log(`Залишилось часу: ${time}`);
        
        if (isActive) {
            interval = setInterval(() => {
            setTime((time) => (time > 0 ? time -1 : reset()));
        }, 1000);
        } else if (isActive && time !== 0) {
        clearInterval(interval);
        }          
        return () => clearInterval(interval);
        }, [isActive, time]);      

    return (
        <div className='display'>
            <div>{time}</div>
            <div>
            <button
                onClick={() => {
                    setIsActive(!isActive);
                    //timerChange();
                }}
            >
                {isActive ? 'Stop' : 'Start'}
            </button>
        </div>
   
        <div
           className='display-row'
           style={{ width: `calc(${time} * (100% / ${useState(30)}))`}}
        ></div>
            </div>
            );
        };
        
export default Timer;