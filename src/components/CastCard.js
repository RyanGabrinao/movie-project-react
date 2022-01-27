import React from "react";
import noPoster from "../images/no-movie-poster.jpg";

function CastCard({ cast }) {
  return (
    <div className="cast-card">
      {cast.profile_path !== null ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
          alt=""
        />
      ) : (
        <img src={noPoster} alt="" />
      )}

      <span>{cast.name}</span>
      <span>as {cast.character}</span>
    </div>
  );
}

export default CastCard;
