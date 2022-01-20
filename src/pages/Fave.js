import React, { useEffect, useState } from "react";
import Movies from "../components/Movies";

function Fave() {
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    const moviesInLocalStorage = Object.keys(localStorage)
      .filter((key) => key.startsWith("movie"))
      .map((key) => localStorage[key]);

    const parsedMoviesInLocalStorage = moviesInLocalStorage.map((x) =>
      JSON.parse(x)
    );

    setLikedMovies(parsedMoviesInLocalStorage.filter((x) => x.isLiked));
  }, []);

  return (
    <main>
      <div className="favorites">
        <h2>Fave</h2>
        {likedMovies.length === 0 ? (
          <p>You have no movies in your favourites</p>
        ) : (
          <Movies moviesData={likedMovies} />
        )}
      </div>
    </main>
  );
}

export default Fave;
