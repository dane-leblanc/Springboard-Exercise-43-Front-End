import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../users/UserContext";

function PrivateRoute({ path, children }) {
  const { currentUser } = useContext(UserContext);

  console.debug("PrivateRoute", "path=", path, "currentUser=", currentUser);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;
