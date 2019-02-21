import React, { Component } from 'react';
import { numArray } from '../helpers/utilities.js';

class NumberScale extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeButton: "" 
    }
  }

  handleClick(e) {
    console.log(e.target.id);
    this.props.onScaleSelect(this.props.value, e.target.id);
  }

  render() {
    const levels = numArray(this.props.scale);
    return (
      <div className="number-scale">
				{ this.props.content !== "" ? (<p>{ this.props.content }</p>) : "" }
        <div className="clearfix">
          <p className="float-left scale-label">{ this.props.leftLabel }</p>
          <p className="float-right scale-label">{ this.props.rightLabel }</p>
        </div>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          { levels.map( (level, i) => {
            return (
              <label 
                key={i} 
                id={i}
                className="btn btn-light btn-scale"
                onClick={ this.handleClick }
              >
                <input type="radio" />
              </label>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NumberScale;
