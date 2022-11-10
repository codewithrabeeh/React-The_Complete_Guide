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
      const response = await fetch("https://fir-7f478-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }


      const data = await response.json();
      
      const loadedMovies = []

      for(const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      setData(loadedMovies);
      // setLoading(false);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }, [])

  useEffect(()=>{
    movieBtnHandler()
  }, [movieBtnHandler])

  async function addMovieHandler(movie) {
    const response = await fetch('https://fir-7f478-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
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