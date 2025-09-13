import "./App.css";
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from "react";


function App() {

  const  [isLoggedIn, setIsloggedIn] = useState(true);

  return (
    <div>  
      <Navbar isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </div>
  )
}

export default App;
