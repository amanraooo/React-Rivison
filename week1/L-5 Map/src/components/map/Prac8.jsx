import React from 'react'

const Prac8 = () => {

    const cities = ['Sonipat', 'Pune', 'Delhi'];
  return (
    <div>
        {/* Reverse of array */}
      {
        cities.slice().reverse().map((city, i)=>(
            <li key={i}>{i + 1}. {city}</li>
        ))
      }
    </div>
  )
}

export default Prac8
