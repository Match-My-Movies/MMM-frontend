import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GenreCombiner from "./pages/GenreCombiner";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/genres" element={<GenreCombiner />} />
      </Routes>
    </Router>
  );
};

export default App;
