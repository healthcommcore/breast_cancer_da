import React, { Component } from 'react';
import getNumberArray from '../helpers/number_array.js';
import worry_content from '../helpers/worry_content.json';

class WorryTable extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      activeButton: "" 
    }
  }

  handleChange(e) {
    this.props.onScaleSelect(e.target.name, e.target.id);
  }


  render() {
    const nums = getNumberArray("5").slice(1);
    return (
      <table className="table table-bordered table-responsive-sm">
        <thead className="thead-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">Strongly disagree</th>
            <th scope="col">Disagree</th>
            <th scope="col">In between</th>
            <th scope="col">Agree</th>
            <th scope="col">Strongly agree</th>
          </tr>
        </thead>
        <tbody>
          { worry_content.map( (worry, i) => {
            return (
              <tr key={i}>
                <td>{ worry.content }</td>
                { nums.map( (num, j) => {
                  return (
                    <td key={j}>
                      <div className="form-check">
                        <input 
                          className="form-check-input"
                          type="radio"
                          name={ worry.type }
                          key={j}
                          id={num}
                          onChange={ this.handleChange }
                        />
                        <label className="form-check-label">{num}</label>
                      </div>
                    </td>
                  )
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default WorryTable;
