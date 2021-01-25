import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ SearchMovies }) => {
  const [keyword, setKeyword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!keyword) {
      alert("Please add a movie title");
    } else {
      SearchMovies(keyword);
    }

    setKeyword("");
  };

  return (
    <form className='search_movie_input' onSubmit={onSubmit}>
      <input
        className='search_input'
        placeholder='Enter the movie title'
        value={keyword}
        type='text'
        name='keyword'
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className='search_btn' type='submit'>
        <FontAwesomeIcon className='search_icon' icon={faSearch} />
      </button>
    </form>
  );
};

export default Search;
