import React, { useState } from "react";

import { Link } from 'react-router-dom';

import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

    const onSubmit = async e => {
      e.preventDefault();
     // login(email, password);
  }

  const onChange = (n) =>
    setFormData({ ...formData, [n.target.name]: n.target.value });

  return (
    <div className="register">
      
      <form className="form" onSubmit={(e) => onSubmit(e)}>
      <h1 className='title'>Log in</h1>
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
          minLength="6"
        ></input>

        <button type="submit">Sign in</button>
        <p className='question'> 
        Need to create an account?{" "}
        <Link to="/register" className="register-text">
          Register
        </Link>
        </p>
      </form>
      
    </div>
  );
};

export default Login;
