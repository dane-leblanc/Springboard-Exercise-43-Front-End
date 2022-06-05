import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        Jobly
      </NavLink>
      <NavLink to="/companies" className="nav-item nav-link ml-auto">
        Companies
      </NavLink>
      <NavLink to="/jobs" className="nav-item nav-link">
        Jobs
      </NavLink>
      <NavLink to="/login" className="nav-item nav-link">
        Log In
      </NavLink>
      <NavLink to="/signup" className="nav-item nav-link">
        Sign Up
      </NavLink>
      <NavLink to="/profile" className="nav-item nav-link">
        Profile
      </NavLink>
    </nav>
  );
}

export default NavBar;
