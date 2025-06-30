import React from 'react'
import { Outlet } from 'react-router-dom';
const UserLayout = () => {
  return (
    <div>
      <h2> Users Section</h2>
      <hr />
      <Outlet />
    </div>
  )
}

export default UserLayout
