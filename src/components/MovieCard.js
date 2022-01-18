import React from "react";
import noPoster from "../images/no-movie-poster.jpg";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.poster_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`movie poster for ${movie.title}`}
          />
        ) : (
          <img src={noPoster} alt="no poster" />
        )}
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
      </div>
    </div>
  );
}

export default MovieCard;
