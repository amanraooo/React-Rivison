import React from 'react'

const Card = (props) => {
  return (
    
      <div className='card'>
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <p>{props.role}</p>
      </div>
   

  )
}

export default Card
