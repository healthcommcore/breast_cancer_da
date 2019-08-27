/**
 * Main applicaiton entry point
 *
 * Author: Dave Rothfarb
 * Project: Consuder breast cancer decision aid
 * Health Communication Core 2019
 *
 * This is the App component that gets loaded in the
 * React index.js file. It contains all the routes to each
 * section of the decision aid as well as the master state
 * which keeps track of all user input from each section. 
 * There is also code to pass the user ID for Google Analytics
 * user tracking and code for session timeout that isn't actually
 * used. I kept it in just in case.
 */
// React, React-router, CSS
import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

// Layout
import Banner from "./components/layout/Banner";
import TopNav from "./components/layout/TopNav";
import SideNav from "./components/layout/SideNav";
import Footer from "./components/layout/Footer";

// Screens
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Resources from "./components/Resources";
import Admin from "./components/Admin";
import TreatmentOptions from "./components/TreatmentOptions";
import TreatmentComparison from "./components/TreatmentComparison";
import ValuesClarification from "./components/ValuesClarification";
import WorryAssessment from "./components/WorryAssessment";
import SupportiveResources from "./components/SupportiveResources";
import NextSteps from "./components/NextSteps";
import Summary from "./components/Summary";

// Utiltiies
import PrivateRoute from "./components/PrivateRoute";
import isLoggedIn from "./helpers/is_logged_in";
import getApi from "./helpers/api_urls";
import store from "store";

const api = getApi("local");
const LIMIT = 1000 * 60 * 60;
const history = createBrowserHistory();

history.listen( location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

class App extends Component {

  constructor(props) {
    super(props);
    this.saveProgress = this.saveProgress.bind(this);
    this.startSessionTimer = this.startSessionTimer.bind(this);
    this.startSessionTimer = this.startSessionTimer.bind(this);
    this.reset = this.reset.bind(this);
    this.clearState = this.clearState.bind(this);
    this.state = {
      reset: false,
      sessionExpired: false,
      timeoutid: ""
    }
  }

  componentDidUpdate() {
    if (this.state.reset) {
      this.clearState();
    }
    ReactGA.pageview(window.location.pathname);
    const user = store.get("user");
    if (isLoggedIn && user) {
      ReactGA.set({ userId: user.id });
    }
  }

  saveProgress = (data) => {
    if (!this.state.reset) {
      const key = Object.keys(data).shift();
      this.setState({[key] : data[key]});
    }
  }

  reset = () => {
    this.setState({ reset: !this.state.reset });
  }

  clearState = () => {
    if (Object.keys(this.state).length > 3) {
      let newState = {...this.state};
      Object.keys(newState).map( (key) => {
        newState[key] = undefined;
      });
      this.setState({ ...newState })
    }
    this.reset();
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
        { isLoggedIn() ? <TopNav reset ={ this.reset } timeoutid={ this.state.timeoutid } /> : "" }
        <Banner />
        <section className="main">
          <div className="container full-width-print full-max-width-print">
            <div className="row">
              <div id="sidenav" className="col-md-3">
              { isLoggedIn() ? <SideNav /> : "" }
              </div>
              <div className="col-md-9 full-max-width-print">
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
                  savedValues={ this.state.values }
                />
                <PrivateRoute 
                  path="/treatment-comparison" 
                  title="Treatment comparison"
                  showNext
                  component={ TreatmentComparison } 
                />
                <PrivateRoute 
                  path="/worry-assessment" 
                  onSaveProgress={ this.saveProgress }
                  component={ WorryAssessment }
                  savedValues={ this.state.worry }
                />
                <PrivateRoute 
                  path="/supportive-resources" 
                  worries={ this.state.worry }
                  api={ api } 
                  component={ SupportiveResources } 
                />
                <PrivateRoute 
                  path="/next-steps" 
                  onSaveProgress={ this.saveProgress }
                  component={ NextSteps } 
                  savedValues={ this.state.next }
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
        <Footer />
      </div>
    );
  }
}

export default App;
