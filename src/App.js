import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, withRouter } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./components/Home";
import About from "./components/About";
import Resources from "./components/Resources";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Admin from "./components/Admin";
import TreatmentOptions from "./components/TreatmentOptions";
import ValuesClarification from "./components/ValuesClarification";
import TreatmentComparison from "./components/TreatmentComparison";
import WorryAssessment from "./components/WorryAssessment";
import HighAnxiety from "./components/HighAnxiety";
import NextSteps from "./components/NextSteps";
import Summary from "./components/Summary";
import isLoggedIn from "./helpers/is_logged_in";
import getApi from "./helpers/api_urls";
import store from "store";

const api = getApi("local");
const LIMIT = 1000 * 60 * 60;
class App extends Component {

  constructor(props) {
    super(props);
    this.saveProgress = this.saveProgress.bind(this);
    this.startSessionTimer = this.startSessionTimer.bind(this);
    this.state = {
      sessionExpired: false,
      timeoutid: ""
    }
  }

  saveProgress = (data) => {
    const key = Object.keys(data).shift();
    this.setState({[key] : data[key]});
  }

  startSessionTimer = () => {
    console.log("Begin session called");
    const timeoutid = setTimeout( () => {
        store.remove("user");
        store.set("loggedIn", false);
        this.setState({ sessionExpired: true });
    }, LIMIT);
    this.setState({ timeoutid: timeoutid });
  }

  render() {
    if( this.state.sessionExpired) {
      withRouter( ({history}) => {
        history.push("/login");
        return <Redirect to="/login" />;
      });
    }
    return (
      <div className="app">
        { isLoggedIn() ? <NavBar timeoutid={ this.state.timeoutid } /> : "" }
        <Banner />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
              </div>
              <div className="col-md-9">
                <Route path="/login" 
                       render={ (props)=> 
                          <Login 
                                 api={ api } 
                                 startSessionTimer={ this.startSessionTimer } 
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
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
