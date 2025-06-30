import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <li>

                <Link to='/'>Home</Link>

            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>

            {/* <li>
                <Link to='/user/1'>User1</Link>

            </li>

            <li> 

            <Link to='/user/2'>User2</Link>

            </li>
            <li>
            <Link to='/product/shoes'>shoes</Link>

            </li>
            <li>
            <Link to='/product/watch'>watch</Link>

            </li> */}

            <li>
                <Link to='/blogs'>Blogs</Link>
            </li>
        </div>
    )
}

export default Navbar

