import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLoggedIn from '../helpers/is_logged_in.js';

const PrivateRoute = ({ component: Component, path, ...rest }) => (
  <Route
    {...rest}
    path={ path }
    render= { props =>
      isLoggedIn() ? (<Component { ...rest }/>) : (
        (props.location.pathname !=="/login") ? (
          <Redirect
            to="/login"
          />
        ) : ""
      )
    }
  />
);

export default PrivateRoute;
