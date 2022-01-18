import React from "react";
import MovieCard from "./MovieCard";

function Movies({ moviesData }) {
  return (
    <div className="movies-container">
      {moviesData.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
