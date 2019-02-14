import React, { Component } from 'react';
import axios from 'axios';
import UserDataForm from './UserDataForm';
import UserDataFields from './UserDataFields';
import UserList from './UserList';
import Modal from 'react-bootstrap/Modal';

class Admin extends Component {

  constructor(props) {
    super(props);
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.filterFields = this.filterFields.bind(this);
    this.initializePasswordField = this.initializePasswordField.bind(this);
    this.findRecord = this.findRecord.bind(this);
    this.state = {
      rows: [],
      userUpdate: {},
      modal: {
        show: false
      }
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
    const fieldsToUpdate = this.filterFields(data);
    //console.log(fieldsToUpdate);
    {/*
    */}
    axios({
      method: 'put',
      url: this.props.api + '?req=update_user',
      data: data
    })
      .then( (result) => {
        console.log(result);
      })
      .catch( (error) => {
        console.log(error);
      });

    this.handleModalClose();
  }

  filterFields = (submittedFields) => {
    const updatedUser = this.initializePasswordField(submittedFields);
    const originalUser = this.state.userUpdate;
    const keys = Object.keys(originalUser);
    keys.map( (key) => {
      if( submittedFields[key] !== originalUser[key]) {
        updatedUser[key] = submittedFields[key];
      }
    });
    return updatedUser;
  }

  initializePasswordField = (submittedFields) => {
    if(submittedFields.hasOwnProperty("password")) {
      return { password: submittedFields.password }
    }
    return {}
  }


  handleModalClose = () => {
    this.setState({ 
      modal: {
        show: false
      }
    });
  }

  handleEditUser = (id) => {
    const user = this.findRecord(id);
    this.setState({ 
      userUpdate: user,
      modal: { show: true }
    });
  }

  findRecord = (id) => {
    const rows = this.state.rows;
    const user = rows.find( (row) => {
      return row.id === id;
    });
    return user;
  }

  render () {
    return (
      <div>
        <Modal show={ this.state.modal.show} onHide={ this.handleModalClose }>
          <Modal.Header closeButton>
            <Modal.Title>User update</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserDataForm 
              userUpdate={ this.state.userUpdate } 
              storeData={ this.handleUserUpdate } 
              handleModalClose={ this.handleModalClose }
              isModal 
            />
          </Modal.Body>
        </Modal>
        <h1>Administration page</h1>
        <h2>Add new users</h2>
        <UserDataForm 
          storeData={ this.handleUserFormSubmit } 
        />
        <h2>List of current users</h2>
        <UserList 
          editUser={ this.handleEditUser }
          onDelete={ this.handleDelete }
          rows={ this.state.rows || [] } 
          className={ this.state.rows ? "d-block" : "d-none" } 
        />
      </div>
    );
  }
}

export default Admin;
