import React, { useState } from 'react'
 
const ToggleText = () => {
    const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={()=> setShow(!show)}>toggle</button>
      {show && <p>hello aman</p>}
    </div>
  )
}

export default ToggleText
