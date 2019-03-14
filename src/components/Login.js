import React, { Component } from 'react';
import axios from 'axios';
import store from 'store';
import isLoggedIn from '../helpers/is_logged_in.js';
import { makeSessionId } from '../helpers/utilities.js';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.onChage = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.evaluateLogin = this.evaluateLogin.bind(this);
    this.setCookie = this.setCookie.bind(this);
    this.state = {
      username: '',
      password: ''
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
      url: this.props.api + '?req=authenticate'
    })
      .then( (result) => {
        //console.log(result.data);
        console.log('Login successful!');
        this.evaluateLogin(result.data);
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  evaluateLogin = (result) => {
    if (result) {
      store.set('loggedIn', true);
      store.set('user', {
        id: result.id,
        username: result.username,
        lump: result.lump === '1' ? true : false,
        admin: result.admin === '1' ? true : false
      });
      this.props.beginSession();
      this.props.history.push('/');
      //console.log(store.get('user'));
    }
    else {
      console.log('There was a problem logging in: ' + result);
    }
    // Add Login validation
  }
      
  render() {
    if (isLoggedIn()) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <h1>Please log in</h1>
        <form onSubmit={ this.onSubmit }>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' className='form-control' name='username' onChange={ this.onChange } placeholder='Username' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control' name='password' onChange={ this.onChange } placeholder='Password' />
          </div>
          <button type='submit' className='btn btn-primary btn-lg'>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login
