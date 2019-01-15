import React, { Component } from 'react';
import UserDataFields from './UserDataFields';

class UserDataForm extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      lump: '0',
      admin: '0'
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.storeData(this.state);
  }

  render () {
    return (
      <div>
        <form onSubmit={ this.onSubmit }>
          <UserDataFields 
            admin={ this.state.admin }
            lump={ this.state.lump }
            onChange={ this.onChange } 
          />
          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </form>
      </div>
    );
  }
}

export default UserDataForm;
