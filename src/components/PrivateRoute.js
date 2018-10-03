import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLoggedIn from '../helpers/is_logged_in.js';

const PrivateRoute = ({ component: Component, path }) => (
  <Route
    path={ path }
    render= {props =>
      isLoggedIn ? (<Component />) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from : props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
