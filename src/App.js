import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import './navbar.css'
import MovieComponent from './movie';

export function App() {
  function handleClick(){
    alert("Button clicked!");
  }

  const element = <button onClick={handleClick}>Click me</button>
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
          <div className='column'>
            <MovieComponent 
              image={logo}
              title="React Movie"/>
            <MovieComponent 
              image={logo}
              title="Beauty and the Beast"/>
            <MovieComponent 
              image={logo}
              title="Top Gun"/>
            <MovieComponent 
              image={logo}
              title="Good Will Hunting"/>
          </div>

          <div className='column'>
            <MovieComponent 
              image={logo}
              title="Dune"/>
            <MovieComponent
              image={logo}
              title="The Lion King" />
            <MovieComponent 
              image={logo}
              title = "Star Wars"/>
            <MovieComponent 
              image={logo}
              title = "Interstellar"/>
          </div>

          <div className='column'>
            <MovieComponent 
              image={logo}
              title = "Interstellar"/>
            <MovieComponent 
              image={logo}
              title = "Interstellar"/>
            <MovieComponent 
              image={logo}
              title = "Interstellar"/>
            <MovieComponent 
              image={logo}
              title = "Interstellar"/>
          </div>

          <div className='column'>
            <MovieComponent 
              image={logo}
              title = "Interstellar"/>
            <MovieComponent 
              image={logo}
              title = "Interstellar"/>
            <MovieComponent 
              image={logo}
              title = "Interstellar"/>
            <MovieComponent 
              image={logo}
              title = "Interstellar"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
