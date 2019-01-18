import React, { Component } from 'react';
import axios from 'axios';
import UserDataForm from './UserDataForm';
import UserDataFields from './UserDataFields';
import UserList from './UserList';
import Modal from './Modal';

class Admin extends Component {

  constructor(props) {
    super(props);
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.findRecord = this.findRecord.bind(this);
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
    {/*
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

  handleUserUpdate = (data) => {
    console.log(data);
  }

  handleUpdateClick = (e) => {
    const id = e.target.closest('tr').id;
    const record = this.findRecord(id);
    console.log(record);
  }

  findRecord = (id) => {
    const rows = this.state.rows;
    rows.find( (row) => {
      return row.id === id;
    });
  }

  render () {
    return (
      <div>
        <Modal>
          <UserDataForm storeData={ this.handleUserUpdate } isModal />
        </Modal>
        <h1>Administration page</h1>
        <h2>Add new users</h2>
        <UserDataForm 
          storeData={ this.handleUserFormSubmit } 
        />
        <h2>List of current users</h2>
        <UserList 
          onUpdate={ this.handleUpdateClick }
          onDelete={ this.handleDelete }
          rows={ this.state.rows || [] } 
          className={ this.state.rows ? "d-block" : "d-none" } 
        />
        <button className="btn btn-primary" data-target="#bcdaModal" data-toggle="modal">Test modal</button>
      </div>
    );
  }
}

export default Admin;
