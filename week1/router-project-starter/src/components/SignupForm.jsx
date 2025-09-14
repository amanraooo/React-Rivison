import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

const [ShowPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>

      {/* student-instructor-tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form>

        {/* first name and last name */}
        <div>
          <label>
          <p>
            First Name <sup>*</sup>
          </p>
          <input
            required
            type="text"
            name="firstname"
            onChange={changeHandler}
            value={FormData.firstname}
            placeholder="Enter First Name"
          />
        </label>

        <label>
          <p>
            Last Name <sup>*</sup>
          </p>
          <input
            required
            type="text"
            name="lastname"
            onChange={changeHandler}
            value={FormData.lastname}
            placeholder="Enter Last Name"
          />
        </label>
        </div>
        
        {/* email address */}
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

          {/*create password and confirm password */}
           <div>
            {/* create password */}
            <label >
              <p>
            Create Password <sup>*</sup>
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
            </label>

            {/* confirm password */}
             <label >
              <p>
            Confirm Password <sup>*</sup>
          </p>
          <input
            required
            type={ShowPassword ? ("text") : ("password")}
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={changeHandler}
            placeholder="Confirm Password"
          />
          <span onClick={() => setShowPassword((prev) => !prev)}>
                      {ShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
            </label>

           </div>

            <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
