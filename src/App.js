import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Resources from './components/Resources.js';
import NavBar from './components/NavBar.js';
import PrivateRoute from './components/PrivateRoute.js';
import Login from './components/Login.js';
import Admin from './components/Admin.js';
import TreatmentOptions from './components/TreatmentOptions.js';
import ValuesClarification from './components/ValuesClarification.js';
import TreatmentComparison from './components/TreatmentComparison.js';
import WorryAssessment from './components/WorryAssessment.js';
import HighAnxiety from './components/HighAnxiety.js';
import NextSteps from './components/NextSteps.js';
import Summary from './components/Summary.js';
import isLoggedIn from './helpers/is_logged_in.js';
import getApi from './helpers/api_urls.js';

const api = getApi('local');
class App extends Component {

  constructor(props) {
    super(props);
    this.saveProgress = this.saveProgress.bind(this);
    this.beginSession = this.beginSession.bind(this);
    this.state = {}
  }

  saveProgress = (data) => {
    const key = Object.keys(data).shift();
    this.setState({[key] : data[key]});
  }

  beginSession = () => {
    setTimeout( () => {
      console.log("A user has logged in");
    }, 5000);
  }

  render() {
    return (
      <div className="app">
        <div className="banner"></div>
        { isLoggedIn() ? <NavBar /> : "" }
        <section>
          <div className="container">
            <Route path="/login" 
                   render={ (props)=> 
                      <Login 
                             api={ api } 
                             beginSession={ this.beginSession } 
                             { ...props } 
                      /> 
                   } 
            />
            <PrivateRoute path="/about" component={ About } />
            <PrivateRoute path="/resources" component={ Resources } />
            <PrivateRoute path="/admin" api={ api } component={ Admin } />
            <PrivateRoute path="/treatment-options" component={ TreatmentOptions } />
            <PrivateRoute 
              path="/values-clarification" 
              component={ ValuesClarification } 
              onSaveProgress={ this.saveProgress }
            />
            <PrivateRoute 
              path="/treatment-comparison" 
              title="Treatment comparison"
              nextButton
              component={ TreatmentComparison } 
            />
            <PrivateRoute 
              path="/worry-assessment" 
              onSaveProgress={ this.saveProgress }
              component={ WorryAssessment }
            />
            <PrivateRoute 
              path="/high-anxiety" 
              api={ api } 
              component={ HighAnxiety } 
            />
            <PrivateRoute 
              path="/next-steps" 
              onSaveProgress={ this.saveProgress }
              component={ NextSteps } 
            />
            <PrivateRoute 
              path="/summary" 
              data={ this.state }
              component={ Summary } 
            />
            <PrivateRoute exact path="/" component={ Home } />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
