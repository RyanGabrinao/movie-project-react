import React from "react";
import { motion } from "framer-motion";

function Backdrop({ width, movie }) {
  return (
    <motion.div
      className="backdrop-img"
      initial={{ scale: 1, opacity: 0 }}
      animate={{ scale: 1.1, opacity: 1 }}
      transition={{
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.4,
      }}
      style={
        width >= 600
          ? {
              backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie.backdrop_path}")`,
            }
          : { backgroundImage: "none" }
      }
    ></motion.div>
  );
}

export default Backdrop;
