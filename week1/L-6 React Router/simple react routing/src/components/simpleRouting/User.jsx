import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    const {id} = useParams();
  return (
    <div>
      <p>id is {id}</p>
    </div>
  )
}

export default User
