import React from 'react'

const Prac1 = () => {
    const fruits = ['apple' , 'banana', 'cherry', 'date', ];
  return (
    <div>
      {
        fruits.map((fruit, index)=>(
            <i key={index}>{index + 1}. {fruit}<br/> </i>
        ))
      }
    </div>
  )
}

export default Prac1
