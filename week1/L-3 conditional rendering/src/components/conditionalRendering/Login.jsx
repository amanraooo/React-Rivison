import React, { useState } from 'react'

const Login = () => {

  const [login, setLogin] = useState(true)
  return (
    <div>
      {
        login ? "welcome " : "login please"
      }
    </div>
  )
}

export default Login
