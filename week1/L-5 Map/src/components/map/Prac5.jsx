import React from 'react'

const Prac5 = () => {
    const colors =['Red', 'Blue', 'Green', 'Yellow'];
  return (
    <div>
      {
        colors.map((color, i)=>(
            <button key={i}> {color}  </button>
        ))
      }
    </div>
  )
}

export default Prac5
