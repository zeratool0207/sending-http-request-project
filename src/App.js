import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMovieHandler() {
    fetch('https://swapi.dev/api/films/').then(response => {
      return response.json();
    }).then(data => {
      data.results;
    })
  }

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
