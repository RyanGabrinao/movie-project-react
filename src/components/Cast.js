import React, { useState, useEffect } from "react";
import { API_KEY } from "../globals/globals";
import CastCard from "./CastCard";

function Cast({ id }) {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    const fetchCast = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      let castData = await res.json();
      castData = castData.cast.splice(0, 15);
      setCast(castData);
    };
    fetchCast();
  }, [id]);
  return (
    <>
      {cast !== null && (
        <>
          <div className="cast-container">
            <h2>Cast</h2>
            <div className="cast-scroll-container">
              {cast.map((cast, i) => (
                <CastCard cast={cast} key={i} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cast;
