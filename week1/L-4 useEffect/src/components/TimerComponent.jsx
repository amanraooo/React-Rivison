import React, { useEffect, useState } from 'react'

const TimerComponent = () => {

    const [show, setShow] = useState(true);
    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? "stop" : "start"}
            </button>
            {show && <Timer />}
            {show ? "timer on ": "timer off"}
        </div>
    )
}

    function Timer() {
        useEffect(()=>{
            const interval = setInterval(()=>{
                console.log("timer is running")
            },1000)

            return()=>{
                clearInterval(interval);
                console.log("Timer stopped");
            }
        },[])
        return <p>Timer is running... (check console)</p>;
    }
export default TimerComponent
