import React, { Component } from 'react';
import axios from 'axios';
import NewUserForm from './NewUserForm';
import UserList from './UserList';

class UserRegistration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rows: []
    };
  }

  componentDidMount = () => {
    axios({
      method: 'get',
      url: 'http://api.bcda.dr809.local?req=users'
    })
      .then( (result) => {
        this.setState({
          rows: result.data
        });
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  hasRows = () => {
    return this.state.rows.length > 0;
  }

  handleUserFormSubmit = (data) => {

    axios({
      method: 'post',
      url: 'http://api.bcda.dr809.local?req=add_user',
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
        <NewUserForm 
          storeData={ this.handleUserFormSubmit } 
        />
        <UserList 
          rows={ this.state.rows } 
          className={ this.hasRows ? "d-block" : "d-none" } 
        />
      </div>
    );
  }
}

export default UserRegistration;
