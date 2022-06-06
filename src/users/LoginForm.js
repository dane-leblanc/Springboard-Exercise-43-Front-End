import React, { useState } from "react";
import Alert from "../common/Alert";
import { useNavigate } from "react-router-dom";

function LoginForm({ login }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await login(formData);
    if (res.success) {
      navigate("/companies");
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
        </div>
        {formErrors.length ? (
          <Alert type="danger" messages={formErrors} />
        ) : null}
        <div className="form-group">
          <button type="submit" className="btn btn-primary float-right">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
