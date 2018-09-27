import React, { Component } from 'react';

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  userListTable = () => {
    if (!this.state.rows.length > 0) {
      return;
    }
    return (
      <table>
        { this.state.rows.map((row, i) => {
          <tr key={ i }>
          </tr>
        })}
      </table>
    );
  }

  render() {
    return this.userListTable();
  }
}

export default UserList;
