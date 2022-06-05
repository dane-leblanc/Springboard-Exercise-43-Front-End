import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./routes-nav/NavBar";
import Components from "./routes-nav/Components";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Components />
      </div>
    </BrowserRouter>
  );
}

export default App;
