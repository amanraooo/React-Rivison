import React from 'react'

const UserCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.role}</p>
    </div>
  )
}

export default UserCard
