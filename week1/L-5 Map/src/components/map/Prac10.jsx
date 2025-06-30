import React from 'react'

const Prac10 = () => {

    const names = ['Aman', 'Ravi','Rohit']
  return (
    <div>
      {
        names.map((name, i)=>(
            <input key={i} value={name} readOnly />
        ))
      }
    </div>
  )
}

export default Prac10
