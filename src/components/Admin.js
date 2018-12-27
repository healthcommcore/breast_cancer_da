import React, { Component } from 'react';
import axios from 'axios';
import NewUserForm from './NewUserForm';
import UserList from './UserList';

class Admin extends Component {

  constructor(props) {
    super(props);
    this.handlUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      rows: []
    };
  }

  componentDidMount = () => {
    axios({
      method: 'get',
      url: this.props.api + '?req=users'
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



  handleUserFormSubmit = (data) => {
    let updated_rows = this.state.rows;
    updated_rows.push(data);
    this.setState({ rows: updated_rows });
    //console.log(this.state.rows);
    {/*
    axios({
      method: 'post',
      url: this.props.api + '?req=add_user',
      data: data
    })
      .then( (result) => {
        console.log(result);
      })
      .catch( (error) => {
        console.log(error);
      });
    */}
  }

  handleDelete = (id) => {
    axios({
      method: 'delete',
      url: this.props.api + '?req=delete_user',
      data: id
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
        <h1>Administration page</h1>
        <h2>Add new users</h2>
        <NewUserForm 
          storeData={ this.handleUserFormSubmit } 
        />
        <h2>List of current users</h2>
        <UserList 
          onDelete={ this.handleDelete }
          rows={ this.state.rows || [] } 
          className={ this.state.rows ? "d-block" : "d-none" } 
        />
      </div>
    );
  }
}

export default Admin;
