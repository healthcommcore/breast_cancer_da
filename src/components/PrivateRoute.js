import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLoggedIn from '../helpers/is_logged_in.js';
import store from 'store';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      {...rest}
      path={ path }
      render= { props =>
        isLoggedIn() ? (<Component user={ store.get('user') } path={ path } { ...rest }/>) : (
          (props.location.pathname !=="/login") ? (
            <Redirect
              to="/login"
            />
          ) : ""
        )
      }
    />
  );
}

export default PrivateRoute;
