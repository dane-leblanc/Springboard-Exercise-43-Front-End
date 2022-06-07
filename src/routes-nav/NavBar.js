import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../users/UserContext";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <>
        <NavLink to="/companies" className="nav-item nav-link ml-auto">
          Companies
        </NavLink>
        <NavLink to="/jobs" className="nav-item nav-link">
          Jobs
        </NavLink>
        <NavLink to="/profile" className="nav-item nav-link">
          Profile
        </NavLink>
        <NavLink to="/" onClick={logout} className="nav-item nav-link">
          Log Out - {currentUser.firstName || currentUser.username}
        </NavLink>
      </>
    );
  }

  function loggedOutNav() {
    return (
      <>
        <NavLink to="/login" className="nav-item nav-link ml-auto">
          Log In
        </NavLink>
        <NavLink to="/signup" className="nav-item nav-link">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        Jobly
      </NavLink>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default NavBar;
