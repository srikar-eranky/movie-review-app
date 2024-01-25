import React from "react";

const NavBar = () => {
    return(
    <div className="topnav">
        <h1><a href="/">Movie Reviews</a></h1>
        <div className="searchbar">
            <form action="search" id="form">
                <input placeholder="Search" />
            </form>
        </div>
    </div>
    );
}

export default NavBar;