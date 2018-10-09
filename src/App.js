import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import PrivateRoute from './components/PrivateRoute.js';
import UserLogin from './components/UserLogin.js';
import UserRegistration from './UserRegistration.js';
import isLoggedIn from './helpers/is_logged_in.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="app">
        <div className="banner"></div>
        { isLoggedIn() ? <NavBar /> : "" }
        <section>
          <div className="container">
            <Route path="/login" component={ UserLogin } />
            <PrivateRoute path="/admin" component={ UserRegistration } />
            <PrivateRoute exact path="/" component={ Home } />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
