import React, { Component } from 'react';
import store from 'store';
import isLoggedIn from '../helpers/is_logged_in.js';
import { NavLink, Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    store.remove('user');
    store.remove('loggedIn', false);
    this.setState({ loggedOut: true });
  }

  render() {
    if (this.state.loggedOut) {
      return <Redirect to="/login" />;
    }
    return (
      <NavLink 
        className="nav-item nav-link" 
        to="#" 
        onClick={ this.handleClick }
      >Logout</NavLink>
    );
  }
}

export default Logout;
