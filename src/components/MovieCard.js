import React from "react";
import { Link } from "react-router-dom";
import noPoster from "../images/no-movie-poster.jpg";

function MovieCard({ movie }) {
  return (
    <article>
      <Link to={`/movie/${movie.id}`}>
        <div className="movie-card stacked">
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
          <div className="movie-info flex justify-between align-center gap-md">
            <div className="right-info">
              <h2 className="movie-title">{movie.title}</h2>
              <span>{movie.release_date}</span>
            </div>
            <div className="left-info">{movie.vote_average}</div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default MovieCard;
