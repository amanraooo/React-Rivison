import React, { useEffect, useState } from 'react'

const MouseTracker = () => {

    const [position, setPosition] = useState({x:0, y:0})

    useEffect(()=>{
        const handleMouseMove=(e)=>{
            setPosition({x: e.clientX, y: e.clientY})
        }

        window.addEventListener("mousemove", handleMouseMove);

        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove);
            console.log("🧹 Mouse tracker removed");
        }
    })
  return (
    <div>
      <h3>Mouse Position</h3>
      <p>X: {position.x} | Y: {position.y}</p>
    </div>
  )
}

export default MouseTracker
