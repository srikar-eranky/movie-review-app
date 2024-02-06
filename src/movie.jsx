import React from "react";
import './main-component.css'
import logo from './logo.svg'

const MovieComponent = ({movie}) => {
    return (
        <div>
            <img src={movie.image}></img>
            <h3>{movie.title}</h3>
            <p>Movie ID: {movie.id}</p>
        </div>
    )
}

export default MovieComponent;