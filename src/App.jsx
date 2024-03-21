import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Italy from "./pages/Italy";
import France from "./pages/France";
import Spain from "./pages/Spain";
import England from "./pages/England";
import Germany from "./pages/Germany";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/italy">Italy</NavLink>
          </li>
          <li>
            <NavLink to="/france">France</NavLink>
          </li>
          <li>
            <NavLink to="/spain">Spain</NavLink>
          </li>
          <li>
            <NavLink to="/england">England</NavLink>
          </li>
          <li>
            <NavLink to="/germany">Germany</NavLink>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/france" element={<France />} />
        <Route path="/spain" element={<Spain />} />
        <Route path="/england" element={<England />} />
        <Route path="/germany" element={<Germany />} />
      </Routes>
    </Router>
  );
};

export default App;
