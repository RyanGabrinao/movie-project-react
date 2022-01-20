import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../globals/globals";
import useStickyState from "../hooks/useStickyState";
import { motion } from "framer-motion";
import LikeButton from "../components/LikeButton";

// Animations
const posterVar = {
  init: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.4,
    },
  },
};

const imageVar = {
  init: {
    scale: 1.5,
  },
  show: {
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.4,
    },
  },
};

function Single() {
  const { id } = useParams();
  const [movie, setMovie] = useStickyState(null, `movie-${id}`);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      if (movie === null) {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        const movieDataFromAPI = await res.json();
        movieDataFromAPI.isLiked = false;
        setMovie(movieDataFromAPI);
      } else {
        console.log(movie);
        setIsLiked(movie.isLiked);
      }
    };
    fetchMovie();
  }, [id, movie, setMovie]);

  const onLikeFn = () => {
    const makeNewCopy = (movie) => JSON.parse(JSON.stringify(movie));
    const updatedMovie = makeNewCopy(movie);
    updatedMovie.isLiked = !updatedMovie.isLiked;
    setMovie(updatedMovie);
    setIsLiked(updatedMovie.isLiked);
    console.log(updatedMovie);
  };

  return (
    <>
      <main>
        {movie !== null && (
          <section>
            <h2>{movie.title}</h2>
            <motion.div
              className="movie-poster"
              variants={posterVar}
              initial="init"
              animate="show"
            >
              <motion.img
                variants={imageVar}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </motion.div>
            <LikeButton onLike={onLikeFn} isLiked={isLiked} />
          </section>
        )}
      </main>
    </>
  );
}

export default Single;
