import React, { useEffect, useState } from 'react'

const UE3 = () => {

    const [count, setCount] = useState(0);
    function increment(){
        setCount(count+1);
    }
    useEffect(()=>{
 document.title = `clicked ${count} times`;
    }, [count])
  return (
    <div>
      <button onClick={()=>increment()}>{count}</button>
    </div>
  )
}

export default UE3
