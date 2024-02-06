import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import './navbar.css'
import MovieComponent from './movie';
import  { useEffect, useState } from 'react';

export function App() {
  const [movies, setMovie] = useState([]);

  function addMovie(){
    const newMovie = {
      id: movies.length + 1,
      title: 'New Movie',
      img: {logo}
    }
    setMovie([...movies, newMovie]);
  };


  const element = <button onClick={addMovie}>Add a movie</button>
  return (
    <div className="App">
      <NavBar />
      {/*
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      */}
      {element}
      <div className='movie-component'>
        <div className='row'>
          {movies.map((movie) => (
              <MovieComponent key={movie.id} movie={movie} />
            ))}
          <div className='column'>
            {movies.map((movie) => (
              <MovieComponent key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
