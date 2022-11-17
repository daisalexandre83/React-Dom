import  React from "react";

function Navbar() {
    return<div className="navbar">
        <h1>React router dom</h1>
        <div>
            <Navlink to="/">Home</Navlink>
            <Navlink to="/about">About</Navlink>
            <Navlink to="/contact">Contact</Navlink>
        </div>
    </div>
}

export default Navbar;