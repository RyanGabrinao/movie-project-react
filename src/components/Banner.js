import React from "react";
import LikeButton from "./LikeButton";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import MovieDetails from "./MovieDetails";

// Animations
const posterVar = {
  init: {
    x: -200,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.4,
    },
  },
};

function Banner({ movie, width, onLikeFn, isLiked }) {
  return (
    <div className="banner">
      <Backdrop width={width} movie={movie} />
      <div className="banner-content">
        <motion.div
          className="movie-poster"
          variants={posterVar}
          initial="init"
          animate="show"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
          <LikeButton onLike={onLikeFn} isLiked={isLiked} />
        </motion.div>
        <MovieDetails movie={movie} />
      </div>
    </div>
  );
}

export default Banner;
