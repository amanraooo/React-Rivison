import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
        <nav>
            <Link to='posts' >see all posts </Link>
            <Link to='settings'> settings</Link>
        </nav>
      <Outlet/>
    </div>
  )
}

export default Dashboard
