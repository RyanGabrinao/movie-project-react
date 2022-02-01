import React from "react";
import Rating from "./Rating";

function MovieDetails({ movie }) {
  const roundRuntimeFn = (x) => {
    let hours = x / 60;
    let roundedHours = Math.floor(hours);
    let minutes = (hours - roundedHours) * 60;
    let roundedMinutes = Math.round(minutes);
    return `${roundedHours}h ${roundedMinutes}m`;
  };
  return (
    <div className="movie-details">
      <div>
        <h1 className="movie-title single-page neon">{movie.title}</h1>
        <p className="tagline">{movie.tagline}</p>
      </div>

      <div className="overview-container">
        <h3 className="overview-title heading neon">Overview</h3>
        <p className="overview content">{movie.overview}</p>
      </div>
      <span className="genre-container second-row">
        {movie.genres.map((genres) => (
          <span className="genre" key={genres.id}>
            {genres.name}
          </span>
        ))}
      </span>
      <span className="third-row flex align-center gap-sm">
        <span className="release-date">{movie.release_date}</span>
        <span className="runtime">{roundRuntimeFn(movie.runtime)}</span>
        <span className="rating">
          <Rating movie={movie} />
        </span>
      </span>
    </div>
  );
}

export default MovieDetails;
