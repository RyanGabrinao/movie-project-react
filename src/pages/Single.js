import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LikeButton from "../components/LikeButton";
import { API_KEY } from "../globals/globals";

function Single() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const movieDataFromAPI = await res.json();
      setMovie(movieDataFromAPI);
    };
    fetchMovie();
  }, [id]);

  return (
    <>
      <main>
        {movie !== null && (
          <section>
            <h2>{movie.title}</h2>
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
              <LikeButton />
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default Single;
