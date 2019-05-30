// React, React-router, CSS
import React, { Component } from "react";
import "./App.css";
import { Router, Route, Redirect, withRouter } from "react-router-dom";
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
    this.state = {
      sessionExpired: false,
      timeoutid: ""
    }
  }

  componentDidUpdate() {
    ReactGA.pageview(window.location.pathname);
    const user = store.get("user");
    if (isLoggedIn && user) {
      ReactGA.set({ userId: user.id });
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
        { isLoggedIn() ? <TopNav timeoutid={ this.state.timeoutid } /> : "" }
        <Banner />
        <section className="main">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
              { isLoggedIn() ? <SideNav /> : "" }
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
                  savedValues={ this.state.values }
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
