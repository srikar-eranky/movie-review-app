import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import './navbar.css'
import MovieComponent from './movie';

export function App() {
  return (
    <div className="App">
      <NavBar />
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
      <div className='movie-component'>
        <div className='row'>
          <div className='column'>
            <MovieComponent />
            <MovieComponent />
            <MovieComponent />
            <MovieComponent />
          </div>

          <div className='column'>
            <MovieComponent />
            <MovieComponent />
            <MovieComponent />
            <MovieComponent />
          </div>

          <div className='column'>
            <MovieComponent />
            <MovieComponent />
            <MovieComponent />
            <MovieComponent />
          </div>

          <div className='column'>
            <MovieComponent />
            <MovieComponent />
            <MovieComponent />
            <MovieComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
