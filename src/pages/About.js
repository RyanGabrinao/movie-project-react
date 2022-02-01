import React from "react";
import { ReactComponent as AttributeLogo } from "../images/attribute.svg";

function About() {
  return (
    <main>
      <div className="about">
        <div className="description">
          <h4 className="neon">About the project</h4>
          <p>
            What's Poppin is a Movie Database listing movies based on
            popularity, rating, and release date. Click into the movies if you
            are interested in the details of the film. If you find movies that
            you like, you can even add them to Favorites!{" "}
          </p>
        </div>

        <div className="attribute">
          <div className="attributeLogo">
            <AttributeLogo />
            {/* Logo */}
          </div>
          <p>
            This product uses the TMDB API but is not endorsed or certified by{" "}
            <a
              href="https://www.themoviedb.org/"
              style={{ color: "#9615db", borderBottom: "2px solid #9615db" }}
            >
              TMDB
            </a>
          </p>
          <p>For educational purposes only.</p>
        </div>
      </div>
    </main>
  );
}

export default About;
