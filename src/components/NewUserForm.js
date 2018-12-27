import React, { Component } from 'react';

class NewUserForm extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
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
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input type="text" className="form-control" name="first_name" id="first_name" onChange={ this.onChange }/>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input type="text" className="form-control" name="last_name" id="last_name"  onChange={ this.onChange }/>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" id="username"  onChange={ this.onChange }/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" id="password" onChange={ this.onChange }/>
          </div>
          <div className="form-group">
            <p>Does this person qualify for a lumpectomy?</p>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                name="lump" 
                value="1"  
                checked={ this.state.lump === '1' } 
                onChange={ this.onChange }/>
              <label className="form-check-label" htmlFor="canHaveLumpectomyYes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                name="lump"
                value="0" 
                checked={ this.state.lump === '0' }
                onChange={ this.onChange }
              />
              <label className="form-check-label" htmlFor="canHaveLumpectomy">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <p>Is this person an administrator?</p>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                name="admin"
                value="1"  
                checked = { this.state.admin === '1' }
                onChange={ this.onChange }
              />
              <label className="form-check-label" htmlFor="admin">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                name="admin"
                value="0"
                checked = { this.state.admin === '0' } 
                onChange={ this.onChange }
              />
              <label className="form-check-label" htmlFor="admin">
                No
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewUserForm;
