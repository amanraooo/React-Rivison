import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
  return (
    <div>
     <h1>all posts</h1> 
     <nav> 
     <Link to='new'> create a new post</Link>
     </nav>
     <Outlet/>
    </div>
  )
}

export default Posts
