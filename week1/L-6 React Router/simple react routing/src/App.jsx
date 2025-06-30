import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/simpleRouting/Navbar';
import Home from './components/simpleRouting/Home';
import About from './components/simpleRouting/About';
import User from './components/simpleRouting/User';
import Product from './components/simpleRouting/Product';
import UserLayout from './components/simpleRouting/UserLayout';
import UserList from './components/simpleRouting/UserList';
import UserDetail from './components/simpleRouting/UserDetail';
import UserEdit from './components/simpleRouting/UserEdit';
import Blogs from './components/simpleRouting/Blogs';
import BlogList from './components/simpleRouting/BlogList';
import BlogPost from './components/simpleRouting/BlogPost';
import BlogEdit from './components/simpleRouting/BlogEdit';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: '/about',
      element: (
        <div>
          <Navbar />
          <About />
        </div>
      ),
    },
   
    {
      path: '/blogs',
      element:(
        <div>
           <Navbar />
           <Blogs/>
        </div>
      ),
      children: [
         { path: '', element: <BlogList /> },
      { path: ':name', element: <BlogPost /> },
      { path: ':name/edit', element: <BlogEdit /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
