import React from 'react'

import {BrowserRouter,Routes,Link,Route} from 'react-router-dom';
const Home = () => {
  return (
    <div>
     <h1>Home page</h1> 
     <br /> <br /> <br />
     <Link to='/products'>Products</Link>
    </div>
  )
}

export default Home
