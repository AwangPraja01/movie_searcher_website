import Movies from "./components/Movies";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const keyAPI = "3878b6d29d8c7d8b91288f834ff57e2f";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesFromAPI = await fetchMovies();
      setMovies(moviesFromAPI);
    };

    getMovies();
  }, []);

  // Fetching Data From API
  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/collection/10?api_key=${keyAPI}&language=en-US`
    );

    const data = await res.json();

    return data.parts;
  };

  // Fetching Data From Search Movie
  const SearchMovies = async (keyword) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${keyAPI}&language=en-US&query=${keyword}&page=1&include_adult=false`
    );

    const data = await res.json();
    setMovies(data.results);
  };

  return (
    <div className='App'>
      <Header />
      <Search SearchMovies={SearchMovies} />
      <Movies movies={movies} />
    </div>
  );
};

export default App;
