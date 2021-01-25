import React from "react";
import Movie from "./Movie";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Movies = ({ movies }) => {
  return (
    <div className='main_container'>
      <LazyLoadComponent visibleByDefault={true}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </LazyLoadComponent>
    </div>
  );
};

export default Movies;
