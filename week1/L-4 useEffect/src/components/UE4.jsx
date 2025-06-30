import React, { useEffect } from 'react'

const UE4 = () => {
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("1 sec hua")
        }, 1000)

        return ()=>{
            clearInterval(timer);
            console.log("counter reset")
        }
    },[])
  return (
    <div>
      okok
    </div>
  )
}

export default UE4
