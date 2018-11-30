import React from 'react';
import store from 'store';
import isLoggedIn from '../helpers/is_logged_in.js';
import { NavLink, Redirect, withRouter } from 'react-router-dom';

const Logout = withRouter(
  ({ history }) =>
    isLoggedIn() ? (
      <NavLink 
        className="nav-item nav-link" 
        to="#" 
        onClick={ (e) => {
          history.push("/login");
          store.remove('user');
          store.set('loggedIn', false);
          e.preventDefault();
          return <Redirect to="/login" />;
        }}
      >Logout</NavLink>
    ) : ("")
);

export default Logout;
