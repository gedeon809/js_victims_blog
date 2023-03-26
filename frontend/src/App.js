import React from "react";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/LogIn";
import { Signup } from "./components/SignUp";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
