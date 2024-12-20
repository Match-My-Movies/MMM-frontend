import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1 className="home-logo">🎬 Match My Movies</h1>
        <p className="home-tagline">Your guide to the perfect movie for every moment.</p>
      </header>
      <div className="home-content">
        <div className="home-buttons">
          <Link to="/genres" className="btn">
            Combine Genres
          </Link>
          <Link to="/random" className="btn">
            Random Movie
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
