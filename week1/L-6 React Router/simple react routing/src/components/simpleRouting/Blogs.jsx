import React from 'react'
import { Outlet } from 'react-router-dom';

const Blogs = () => {
  return (
    <div>
      <h1>The recent blogs</h1>
      <Outlet/>
    </div>
  )
}

export default Blogs
