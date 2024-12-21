import React, { useState } from "react";
import axios from "axios";
import "./RandomMovie.css";

const RandomMovie = () => {
  const [movie, setMovie] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [error, setError] = useState("");

  const fetchRandomMovie = async () => {
    setError("");
    setExpanded(false);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/movies/random`
      );
      setMovie(response.data);
    } catch (err) {
      setError("Failed to fetch a random movie. Please try again.");
      console.error(err);
    }
  };

  const toggleDetails = () => setExpanded((prev) => !prev);

  return (
    <div className="random-movie">
      <h1>Random Movie Generator</h1>
      <div className="inputs">
        <button className="btn" onClick={fetchRandomMovie}>
          Pick for Me
        </button>
      </div>
      {error && <p className="error">{error}</p>}
      {movie && (
        <div
          className={`movie-card ${expanded ? "expanded" : ""}`}
          onClick={toggleDetails}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <div className="movie-title">{movie.title}</div>
          {expanded && (
            <div className="movie-details">
              <p>
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              <p>{movie.overview}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RandomMovie;
