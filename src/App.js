import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import PrivateRoute from './components/PrivateRoute.js';
import Login from './components/Login.js';
import UserRegistration from './components/UserRegistration.js';
import TreatmentOptions from './components/TreatmentOptions.js';
import ValuesClarification from './components/ValuesClarification.js';
import TreatmentComparison from './components/TreatmentComparison.js';
import WorryAssessment from './components/WorryAssessment.js';
import HighAnxiety from './components/HighAnxiety.js';
import isLoggedIn from './helpers/is_logged_in.js';
import getApi from './helpers/api_urls.js';

const api = getApi('local');
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
            <Route path="/login" render={ (props)=> <Login api={ api } { ...props } /> } />
            <PrivateRoute path="/admin" api={ api } component={ UserRegistration } />
            <PrivateRoute path="/treatment-options" component={ TreatmentOptions } />
            <PrivateRoute path="/values-clarification" component={ ValuesClarification } />
            <PrivateRoute path="/treatment-comparison" component={ TreatmentComparison } />
            <PrivateRoute path="/worry-assessment" component={ WorryAssessment } />
            <PrivateRoute path="/high-anxiety" api={ api } component={ HighAnxiety } />
            <PrivateRoute exact path="/" component={ Home } />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
