import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to='orders'>Orders</Link>
                <br />
                <Link to='settings'>Settings</Link>
            </nav>

            <hr />
            <Outlet />
        </div>
    )
}

export default Dashboard
