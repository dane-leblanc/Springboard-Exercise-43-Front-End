import React, { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Alert from "../common/Alert";
import UserContext from "../users/UserContext";

function SignupForm({ signup }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await signup(formData);
    if (res.success) {
      navigate("/");
    } else {
      setFormErrors(res.errors);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }
  return (
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="float-left">Username</label>
          <input
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="float-left">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
        </div>{" "}
        <div className="form-group">
          <label className="float-left">First Name</label>
          <input
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>{" "}
        <div className="form-group">
          <label className="float-left">Last Name</label>
          <input
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>{" "}
        <div className="form-group">
          <label className="float-left">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {formErrors.length ? (
          <Alert type="danger" messages={formErrors} />
        ) : null}
        <div className="form-group">
          <button type="submit" className="btn btn-primary float-right">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
