import React from "react";
import { NavLink } from 'react-router-dom';

const SideNav = (props) => {
  return (
    <nav className="side-nav" role="navigation">
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" to="/treatment-options">Treatment options</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/treatment-comparison">Treatment comparison</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/values-clarification">What is important to you</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/worry-assessment">How are you feeling?</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/next-steps">Next steps</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/summary">Summary</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
