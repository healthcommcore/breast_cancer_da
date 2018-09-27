import React, { Component } from 'react';
import axios from 'axios';
import NewUserForm from './components/NewUserForm';
import UserList from './components/UserList';

class UserRegistration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rows: []
    };
  }

  loadRows = () => {
  }

  hasRows = () => {
    return this.state.rows.length > 0;
  }

  handleUserFormSubmit = (data) => {

    axios({
      method: 'post',
      url: 'http://api.bcda.dr809.local',
      data: data
    })
      .then( (result) => {
        console.log(result);
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  render () {
    return (
      <div>
        <UserList 
          rows={ this.loadRows } 
          className={ this.hasRows ? "d-block" : "d-none" } 
        />
        <NewUserForm 
          storeData={ this.handleUserFormSubmit } 
        />
      </div>
    );
  }
}

export default UserRegistration;
