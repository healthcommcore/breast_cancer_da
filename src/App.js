import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js';
import Home from './components/Home.js';
import UserLogin from './components/UserLogin.js';
import UserRegistration from './UserRegistration.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <Route path="/admin" component={ UserRegistration } />
        <Route path="/login" component={ UserLogin } />
        <PrivateRoute path="/home" component={ Home } />
      </div>
    );
  }
}

export default App;
