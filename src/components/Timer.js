import React, { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(30);
    const [isActive, setIsActive] = useState(false);

    function switching() {
        setIsActive(!isActive);
    }
    function reset() {
        setTime(30);
        setIsActive(false);
    }
    useEffect(() => {
        console.log(`Залишилось часу: ${time}`);
        let interval; 
        if (isActive) {
            interval = setInterval(() => {
                if (time > 0) {
                    setTime(time -1 )
                } else {
                    reset()
                }
            }, 1000);
        } else  {
            clearInterval(interval);
        }          
        return () => clearInterval(interval);
        }, [isActive, time]);      

    return (
        <div>
            <div>{time}</div>
            <div>
                <button onClick={switching}>{isActive ? 'Pause' : 'Start'}</button>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{width: `calc(${time} * (100% / ${useState(30)}))`, height: "20px", backgroundColor: "#10101145"}}></div>
        </div>
    );
};
        
export default Timer;