import React from "react";

function CastCard({ cast }) {
  return (
    <div className="cast-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
        alt=""
      />
      <span>{cast.name}</span>
      <span>as {cast.character}</span>
    </div>
  );
}

export default CastCard;
