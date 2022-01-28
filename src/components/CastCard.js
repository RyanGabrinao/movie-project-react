import React from "react";
import noPoster from "../images/no-movie-poster.jpg";

function CastCard({ cast }) {
  return (
    <div className="cast-card">
      <div className="cast-image-container">
        {cast.profile_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
            alt=""
          />
        ) : (
          <img src={noPoster} alt="" />
        )}
      </div>
      <div className="cast-info-container">
        <p className="cast-name">{cast.name}</p>
        <p className="cast-character">as {cast.character}</p>
      </div>
    </div>
  );
}

export default CastCard;
