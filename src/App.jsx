import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GenreCombiner from "./pages/GenreCombiner";
import RandomMovie from "./pages/RandomMovie";
import "./App.css";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/genres" element={<GenreCombiner />} />
            <Route path="/random" element={<RandomMovie />} />
          </Routes>
        </div>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </Router>
    </div>
  );
};

export default App;
