import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import no_image from "../image/no_image.png";

const Movie = ({ movie, scrollPosition }) => {
  const { poster_path, vote_average } = movie;

  return (
    <>
      <div className='item_movie_container'>
        <LazyLoadImage
          scrollPosition={scrollPosition}
          effect='blur'
          className='movie_img'
          src={
            poster_path != null
              ? "https://image.tmdb.org/t/p/w500/" + poster_path
              : no_image
          }
        />
        <div
          className='movie_info'
          style={{
            background:
              vote_average >= 0 && vote_average < 4
                ? "#ff4646"
                : vote_average >= 4 && vote_average <= 5
                ? "#54e346"
                : vote_average > 5 && vote_average <= 7
                ? "#ffd66b"
                : "#23689b",
          }}>
          <FontAwesomeIcon className='star_icon' icon={faStar} />
          <span className='movie_rating'>{vote_average}</span>
        </div>
        <div className='movie_title'>
          <span>{movie.title}</span>
        </div>
      </div>
    </>
  );
};

export default trackWindowScroll(Movie);
