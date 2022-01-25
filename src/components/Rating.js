import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Rating({ movie }) {
  return (
    <>
      <CircularProgressbar
        value={movie.vote_average * 10}
        text={movie.vote_average}
        className="rating"
        background={true}
        styles={buildStyles({
          pathColor:
            movie.vote_average > 7.5
              ? "#43AA48"
              : movie.vote_average > 6
              ? "#82C954"
              : movie.vote_average > 4
              ? "#F4D34F"
              : movie.vote_average > 2
              ? "#C5691B"
              : "#AB3814",
          trailColor: "#000000",
          textColor:
            movie.vote_average > 7.5
              ? "#43AA48"
              : movie.vote_average > 6
              ? "#82C954"
              : movie.vote_average > 4
              ? "#F4D34F"
              : movie.vote_average > 2
              ? "#C5691B"
              : "#AB3814",
          backgroundColor: "rgba(15, 15, 15, 0.75)",
        })}
      />
    </>
  );
}

export default Rating;
