import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Auth.css';

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      const { name, email, password, confirmPassword } = formData;

      const onSubmit = async (e) => {
        e.preventDefault();
        // if (password !== confirmPassword) {
        //   setAlert("Passwords do not match", "danger");
        // } else {
        //   register({ name, email, password });
        // }
      };

      const onChange = (n) =>
    setFormData({ ...formData, [n.target.name]: n.target.value });
    return (
        <div className="register">
          <form className="form" onSubmit={(e) => onSubmit(e)}>
          <h1 className='title'>Register</h1>

            <label>
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter name here"
              value={name}
              name="name"
              onChange={(n) => onChange(n)}
              required
            ></input>
            <label>
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              value={email}
              onChange={(n) => onChange(n)}
              required
            ></input>
    
            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter password here"
              name="password"
              onChange={(n) => onChange(n)}
              required
              value={password}
            ></input>
    
            <label>
              {" "}
              <b>Confirm password</b>{" "}
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              onChange={(n) => onChange(n)}
              value={confirmPassword}
            ></input>
            <button type="submit">Register</button>
            <p className='question'>
            Already have an account?{" "}
            <Link to="/login" className="register-text">
              Log in
            </Link>
          </p>
          </form>
    
        
        </div>
      );
}

export default Register
