import React, { useContext } from "react";
import UserContext from "../users/UserContext";
import { Link } from "react-router-dom";

function Homepage() {
  const { currentUser } = useContext(UserContext);

  function loggedInHome() {
    return <h2>Welcome Back, {currentUser.firstName}!!</h2>;
  }

  function loggedOutHome() {
    return (
      <span>
        <Link to="/login" className="btn btn-primary mr-2">
          Log In
        </Link>
        <Link to="/signup" className="btn btn-primary">
          Sign Up
        </Link>
      </span>
    );
  }
  return (
    <div className="mt-5">
      <h1>Jobly</h1>
      <p>Your dream job is a click away.</p>
      {currentUser ? loggedInHome() : loggedOutHome()}
    </div>
  );
}

export default Homepage;
