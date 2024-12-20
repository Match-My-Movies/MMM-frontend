import React, { useState } from "react";
import axios from "axios";
import "./GenreCombiner.css";

const GenreCombiner = () => {
  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  const [genre1, setGenre1] = useState("");
  const [genre2, setGenre2] = useState("");
  const [movies, setMovies] = useState([]);
  const [expandedMovieId, setExpandedMovieId] = useState(null);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    setMovies([]);
    setError("");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/movies/genres`,
        { params: { genre1, genre2 } }
      );
      setMovies(response.data);
    } catch (err) {
      setError("Failed to fetch movies. Please try again.");
    }
  };

  const toggleMovieDetails = (movieId) => {
    setExpandedMovieId((prevId) => (prevId === movieId ? null : movieId));
  };

  return (
    <div className="genre-combiner">
      <h1>Combine Genres</h1>
      <div className="inputs">
        <select
          value={genre1}
          onChange={(e) => setGenre1(e.target.value)}
          className="dropdown"
        >
          <option value="">Select Genre 1</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <select
          value={genre2}
          onChange={(e) => setGenre2(e.target.value)}
          className="dropdown"
        >
          <option value="">Select Genre 2</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <button
          onClick={fetchMovies}
          className="btn"
          disabled={!genre1 || !genre2}
        >
          Combine
        </button>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="movies">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={`movie-card ${
              expandedMovieId === movie.id ? "expanded" : ""
            }`}
            onClick={() => toggleMovieDetails(movie.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-title">{movie.title}</div>
            {expandedMovieId === movie.id && (
              <div className="movie-details">
                <p>
                  <strong>Release Date:</strong> {movie.release_date}
                </p>
                <p>{movie.overview}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreCombiner;
