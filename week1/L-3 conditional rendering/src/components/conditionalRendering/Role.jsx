import React, { useState } from 'react'

const Role = () => {

    const [role, setRole] =  useState('user');

  return (
    <div>
      <h2>your role</h2>
     <p>
     {
        role === 'admin' ? "welcome admin" : role === 'moderator' ? 'wecome moderator' : "hi user"
      }
    </p> 
    </div>
  )
}

export default Role
