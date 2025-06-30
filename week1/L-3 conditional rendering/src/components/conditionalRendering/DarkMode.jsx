import React, { useState } from 'react'

const DarkMode = () => {

    const [dark, setdark] = useState('false')
  return (
    <div
    style={
        { backgroundColor: dark ? "black" : "beige", color: dark ? "beige" : "black" }
    }
    >
        <button onClick={()=>{setdark(!dark)}}>dark</button>
      <p>
        {
            dark ? "dark mode" : "light mode"
        }
      </p>
    </div>
  )
}

export default DarkMode
