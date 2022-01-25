import React from "react";
import { Link } from "react-router-dom";
import noPoster from "../images/no-movie-poster.jpg";
import Rating from "./Rating";

function MovieCard({ movie }) {
  return (
    <article>
      <Link to={`/movie/${movie.id}`}>
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
            <div className="rating-container">
              <Rating movie={movie} />
            </div>
          </div>
          <div className="movie-info flex justify-between align-center gap-md">
            <div className="left-info">
              <h2 className="movie-title">{movie.title}</h2>
              <span>{movie.release_date}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default MovieCard;
