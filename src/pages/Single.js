import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../globals/globals";
import useStickyState from "../hooks/useStickyState";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Banner from "../components/Banner";
import Cast from "../components/Cast";

function Single() {
  const { id } = useParams();
  const [movie, setMovie] = useStickyState(null, `movie-${id}`);
  const [isLiked, setIsLiked] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const fetchMovie = async () => {
      if (movie === null) {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
        );
        const movieDataFromAPI = await res.json();
        movieDataFromAPI.isLiked = false;
        setMovie(movieDataFromAPI);
      } else {
        setIsLiked(movie.isLiked);
      }
    };
    fetchMovie();

    // console.log(movie);
  }, [id, movie, setMovie]);

  const onLikeFn = () => {
    const makeNewCopy = (movie) => JSON.parse(JSON.stringify(movie));
    const updatedMovie = makeNewCopy(movie);
    updatedMovie.isLiked = !updatedMovie.isLiked;
    setMovie(updatedMovie);
    setIsLiked(updatedMovie.isLiked);
  };

  return (
    <main>
      {movie !== null && (
        <>
          <section className="single-banner">
            <Banner
              movie={movie}
              width={width}
              onLikeFn={onLikeFn}
              isLiked={isLiked}
            />
          </section>
          <section className="more-details">
            <div className="overview-container">
              <h3 className="overview-title header">Overview</h3>
              <p className="overview content">{movie.overview}</p>
            </div>
            <Cast id={id} />
          </section>
        </>
      )}
    </main>
  );
}

export default Single;
