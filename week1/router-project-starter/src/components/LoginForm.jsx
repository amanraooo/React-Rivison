import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'



const LoginForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [ShowPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e){
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In")
    navigate('/dashboard')
  }
  return (
    
      <form onSubmit={submitHandler}>
        <label>
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
          />
        </label>

        <label>
          <p>
            Password <sup>*</sup>
          </p>
          <input
            required
            type={ShowPassword ? ("text") : ("password")}
            value={formData.password}
            name="password"
            onChange={changeHandler}
            placeholder="Enter Password"
          />

          <span onClick={() => setShowPassword((prev) => !prev)}>
            {ShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>

          <Link to="#">
            <p>Forgot Passowrd</p>
          </Link>
        </label>

        <button>Sign In</button>
      </form>
    
  );
};

export default LoginForm;
