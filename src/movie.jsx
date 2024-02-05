import React from "react";
import './main-component.css'
import logo from './logo.svg'

const MovieComponent = (props) => {
    return (
        <><img src={props.image}></img>
        <h3>{props.title}</h3></>
    )
}

export default MovieComponent;