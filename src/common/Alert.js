import React from "react";

/** Alerts for LoginForm, SignupForm, ProfileForm */

function Alert({ type = "danger", messages = [] }) {
  return (
    <div className={`alert alert-${type}`}>
      {messages.map((err) => (
        <p className="mb-0 small" key={err}>
          {err}
        </p>
      ))}
    </div>
  );
}

export default Alert;