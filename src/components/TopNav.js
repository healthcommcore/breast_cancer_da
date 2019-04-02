import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout.js';
import { isAdmin } from '../helpers/user_stats';

const TopNav= (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span></span>
        <button 
          className="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false"
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggle">
          <div className="navbar-nav">
            <NavLink exact className="nav-item nav-link" to="/">Home</NavLink>
            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
            <NavLink className="nav-item nav-link" to="/resources">Resources</NavLink>
            { isAdmin() ? 
              <NavLink className="nav-item nav-link" to="/admin">Admin</NavLink>
              : ""
            }
            <Logout timeoutid={ props.timeoutid } />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
