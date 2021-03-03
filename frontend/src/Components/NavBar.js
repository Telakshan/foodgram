import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const wrapper = useRef(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    }
  }, []);

  const handleClickOutside = event => {
    if(wrapper.current && !wrapper.current.contains(event.target)){
      setClicked(false);
    }
  }

  return (
    <nav className="navigation" ref={wrapper}>
      <div className="name">
        <Link to='/'>
        <h3>foodGram</h3>
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setClicked(!clicked)}>
        <i className={clicked ? `fas fa-times` : `fas fa-bars`}></i>
      </div>

      <div className={clicked ? "nav-menu active" : "nav-menu"}>
        <Link className="middle" onClick={() => setClicked(false)} to="/">
          Home
        </Link>

        <NavLink
          className="middle"
          onClick={() => setClicked(false)}
          to="/projects"
        >
          My Profile
        </NavLink>

        <Link className="middle" onClick={() => setClicked(false)} to="/newitem">
          New Post
        </Link>

        <Link className="middle" onClick={() => setClicked(false)} to="/login">
          Log in
        </Link>

        <Link className="middle" onClick={() => setClicked(false)} to="/about">
          About
        </Link>

        
      </div>
    </nav>
  );
};

export default NavBar;
