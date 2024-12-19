import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🎬 Match My Movies
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/genres">Combine Genres</Link>
          </li>
          <li>
            <Link to="/pairing">Movie Pairing</Link>
          </li>
          <li>
            <Link to="/random">Random Movie</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
