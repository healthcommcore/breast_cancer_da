import React, { Component } from 'react';
import TextInput from './TextInput';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (data) => {
  }

  onDelete = (e) => {
    e.preventDefault();
    const row = e.target.closest("tr");
    row.closest("tr").remove();
    this.props.onDelete(row.id);
  }

  onUpdate = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Last name</th>
            <th scope="col">First name</th>
            <th scope="col">Username</th>
            <th scope="col">Lumpectomy</th>
            <th scope="col">Tasks</th>
          </tr>
        </thead>
        <tbody>
          { this.props.rows.length > 0 ? ( this.props.rows.map( (row, i) => {
            return (
              <tr key={ i } id={ row.id }>
                <td><TextInput onChange={ this.onChange } value={ row.last_name } inputName={ "last_name" + i } inputLabel="Last name" /></td>
              {/*
                <td>{ row.last_name }</td>
              */}
                <td>{ row.first_name }</td>
                <td>{ row.username }</td>
                <td>{ row.lump === "1" ? "Yes" : "No" }</td>
                <td>
                  <button 
                    type="button" 
                    className="btn btn-warning"
                  >Update</button>
                  <button 
                    onClick={ this.onDelete }
                    type="button" 
                    className="btn btn-danger"
                  >Delete</button>
                </td>
              </tr>
            )
          })
          ) : <tr></tr>
          }
        </tbody>
      </table>
    );
  }
}

export default UserList;
