import React, { useState, useEffect, useCallback } from "react";
import AddMovie from './components/AddMovie'

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  

  const movieBtnHandler = useCallback(async () => {

    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }


      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setData(transformedMovies);
      // setLoading(false);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }, [])

  useEffect(()=>{
    movieBtnHandler()
  }, [movieBtnHandler])

  function addMovieHandler(movie) {
    console.log(movie)
  }

  let content = <p>Found no movies.</p>
  
  if (data.length > 0) {
    content = <MoviesList movies={data} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (loading) {
    content = <p>Loading...</p>;
  }


  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={movieBtnHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;

/* 1:00 */