import React, { Component } from 'react';
import axios from 'axios';

class UserLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      data: this.state,
      url: 'http://api.bcda.dr809.local?req=authenticate'
    })
      .then( (result) => {
        console.log(result);
      })
      .catch( (error) => {
        console.log(error);
      });
  }
      
  render() {
    return (
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
    );
  }
}

export default UserLogin;
    

