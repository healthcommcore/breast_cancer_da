import React, { Component } from 'react';

class NumberScale extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeButton: "" 
    }
  }

  handleClick(e) {
    this.props.onScaleSelect(this.props.value, e.target.id);
  }

  render() {
    const limit = parseInt(this.props.scale) + 1;
    const levels = Array.from({ length: limit }, (item, i) => i);
    return (
      <div className="number-scale">
				<p>{ this.props.content }</p>
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
