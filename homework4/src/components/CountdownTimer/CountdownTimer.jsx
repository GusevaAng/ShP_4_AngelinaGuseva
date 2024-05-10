import { useEffect, useState } from "react"
import React from "react"
import './CountdownTimer.css'

const CountdownTimer = () => {
    const [time, setTime] = useState(10);

    useEffect(() => {
        const timerId = setTimeout (() => {
            const count = time > 0
            if (count) {
                setTime(time - 1)
            }
        }, 1000);
                
        return () => {
            clearTimeout(timerId)
        }
        
    }, [time]); 
    

    return (
        <div className="CountdownTimer"> 
            <div className="timer"> таймер </div>
            <h1 className="time">{time}</h1>
            <button className="buttonTimer" onClick={() => setTime(10)}> обновить </button>
        </div>
    )
}

export default CountdownTimer