import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';



const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex flex-row justify-between'>

      <Link>
      <img src={logo} alt="logo" width={160} height={32} />
      </Link>

        <nav>
            <ul className='flex gap-3 '>
                <li>
                    <Link to='/'>Home </Link>
                </li>
                <li>
                    <Link to='/about'>About </Link>
                </li>
                <li>
                    <Link to='/contact'>Contact </Link>
                </li>
            </ul>
        </nav>

        {/* Login - Signup - Logout - Dashboard */}
        <div className='flex ml-5 mr-3 gap-3'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            }
             {!isLoggedIn &&
                <Link to="/signup">
                    <button>
                        Sign Up
                    </button>
                </Link>
            }
             { isLoggedIn &&
                <Link to="/logout">
                    <button>
Log Out                    </button>
                </Link>
            }
             { isLoggedIn &&
                <Link to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>
            }

        </div>


    </div>
  )
}

export default Navbar
