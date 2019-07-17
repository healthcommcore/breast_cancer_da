import React, { Component } from "react";
import axios from "axios";
import store from "store";
import Alert from "react-bootstrap/Alert";
import isLoggedIn from "../helpers/is_logged_in.js";
import { makeSessionId } from "../helpers/utilities.js";
import { Redirect } from "react-router-dom";

class Login extends Component {

  constructor(props) {
    super(props);
    this.onChage = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.evaluateLogin = this.evaluateLogin.bind(this);
    this.onClose = this.onClose.bind(this);
    //this.setCookie = this.setCookie.bind(this);
    this.state = {
      username: "",
      password: "",
      show: false,
      alertContent: []
    };
  }

  onClose = () => {
    this.setState({ show: false });
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  fieldsAreEmpty = (...fields) => {
    let result = false;
    fields[0].map( (field) => {
      if (field === "") {
        return result = true;
      }
    });
    return result;
  }

  showFieldEmptyError = (values) => {
    const intro = "Please enter your ";
    let alert = [];
    if (values.username === "") {
      alert.push(intro + "username");
    }
    if (values.password === "") {
      alert.push(intro + "password");
    }
    this.setState({ alertContent: alert });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ alertContent: [] });
    if ( this.fieldsAreEmpty([this.state.username, this.state.password]) ) {
      this.setState({ show: true });
      this.showFieldEmptyError(this.state);
      return false;
    }
    axios({
      method: "post",
      data: this.state,
      url: this.props.api + "?req=authenticate"
    })
      .then( (result) => {
        console.log(result);
        this.evaluateLogin(result.data);
      })
      .catch( (error) => {
        this.setState({
          show: true,
          alertContent: "Error! " + error
        });
        console.log(error);
      });
  }

  evaluateLogin = (result) => {
    if (result) {
      const sessionid = makeSessionId();
      store.set("loggedIn", true);
      store.set("user", {
        id: result.id,
        sessionid: sessionid,
        username: result.username,
        lump: result.lump === "1" ? true : false,
        admin: result.admin === "1" ? true : false
      });
      this.props.startSessionTimer();
      this.props.history.push("/");
      //console.log(store.get("user"));
    }
    else {
      const alert = ["Incorrect username and/or password. If you forgot your username/password, please contact us"]
      this.setState({
        show: true,
        alertContent: alert
      });
      console.log("There was a problem logging in: " + result);
    }
    // Add Login validation
  }
      
  render() {
    if (isLoggedIn()) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <Alert
          variant="danger"
          dismissible
          show={ this.state.show }
          onClose={ this.onClose }
        >
          { this.state.alertContent.map( (alert, i) => {
            return <p key={i}>{ alert }</p>
          })} 
        </Alert>
        <h1>Please log in</h1>
        <form onSubmit={ this.onSubmit }>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" onChange={ this.onChange } placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" onChange={ this.onChange } placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login
