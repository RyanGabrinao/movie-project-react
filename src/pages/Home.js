import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import NavSort from "../components/NavSort";
import { API_KEY } from "../globals/globals";

function Home({ sort }) {
  const [moviesData, setMoviesData] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`
      );
      let movieDataAPI = await res.json();
      movieDataAPI = movieDataAPI.results.splice(0, 12);
      setMoviesData(movieDataAPI);
    };
    fetchMovies();
  }, [sort]);
  return (
    <main>
      <NavSort />
      {moviesData !== null && <Movies moviesData={moviesData} />}
    </main>
  );
}

export default Home;
