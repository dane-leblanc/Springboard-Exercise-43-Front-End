import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./routes-nav/NavBar";
import Components from "./routes-nav/Components";
import JoblyApi from "./api/api";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Components signup={signup} />
      </div>
    </BrowserRouter>
  );
}

export default App;
