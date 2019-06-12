import React, { Component } from 'react';
import axios from 'axios';
import Alert from "react-bootstrap/Alert";
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
    this.hasBlankOrMissingFields = this.hasBlankOrMissingFields.bind(this);
    this.compileAlerts = this.compileAlerts.bind(this);
    this.produceAlerts = this.produceAlerts.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.filterFields = this.filterFields.bind(this);
    this.updateUserList = this.updateUserList.bind(this);
    this.initializePasswordField = this.initializePasswordField.bind(this);
    this.findRecord = this.findRecord.bind(this);
    this.state = {
      rows: [],
      userUpdate: {},
      checkFields: {
        first_name: "First name",
        last_name: "Last name",
        username: "Username",
        password: "Password"
      },
      modal: {
        show: false
      },
      alert: {
        show: false,
        alertContent: []
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

  hasBlankOrMissingFields = (data) => {
    return Object.values(data).includes("") || Object.entries(data).length < 6;;
  }

  compileAlerts = (data) => {
    const allKeys = Object.keys(this.state.checkFields);
    const dataKeys = Object.keys(data);
    let alerts = allKeys.filter( (key) => {
      return !dataKeys.includes(key); 
    });
    return alerts;
  }

  produceAlerts = (data) => {
    const alertObj = Object.assign({}, this.state.alert);
    const alerts = this.compileAlerts(data);
    let toArr = [];
    alerts.map( (alert) => {
      toArr.push(this.state.checkFields[alert]);
    });
    alertObj.alertContent = alerts;
    this.setState({ alert: alertObj });
  }

  onClose = () => {
    let alert = Object.assign({}, this.state.alert);
    alert.show = false;
    this.setState({ alert : alert });
  }

  handleUserFormSubmit = (data) => {
    if (this.hasBlankOrMissingFields(data)) {
      this.state.alert.show = true;
      this.produceAlerts(data);
      return false;
    }
    {/*
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
    */}
  }

  handleDelete = (id) => {
    axios({
      method: 'post',
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
    if(Object.entries(fieldsToUpdate).length === 1) {
      console.log("Nothing to update");
      this.handleModalClose();
      return;
    }
    this.updateUserList(fieldsToUpdate);
    axios({
      method: 'post',
      url: this.props.api + '?req=update_user',
      data: fieldsToUpdate
    })
      .then( (result) => {
        console.log(result);
      })
      .catch( (error) => {
        console.log(error);
      });
    {/*
    */}

    this.handleModalClose();
  }

  filterFields = (submittedFields) => {
    const updatedUser = this.initializePasswordField(submittedFields);
    const originalUser = this.state.userUpdate;
    updatedUser.id = submittedFields.id;
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

  updateUserList = (user) => {
    const keys = Object.keys(user);
    let updatedRows = this.state.rows;
    updatedRows.map( (row, i) => {
      if(row.id === user.id) {
        keys.map( (key) => {
          row[key] = user[key];    
        });
      }
    });
    this.setState({ rows: updatedRows });
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
        <Alert
          variant="danger"
          dismissible
          show={ this.state.alert.show }
          onClose={ this.onClose }
        >
          { this.state.alert.alertContent.map( (alert, i) => {
            return <p key={i}>Please enter the user's { alert }</p>
          })} 
        </Alert>

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
