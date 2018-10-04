import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout.js';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button 
          className="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false"
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggle">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
            <Logout />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
