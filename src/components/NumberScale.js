import React, { Component } from 'react';
import { numArray } from '../helpers/utilities.js';

class NumberScale extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.evalResponse = this.evalResponse.bind(this);
    this.isResponseShown = this.isResponseShown.bind(this);
    this.state = {
      activeButton: "",
      responseClass: "value-response"
    }
  }

  handleClick = (e) => {
    console.log(e.target.id);
    this.props.onScaleSelect(this.props.value, e.target.id);
    this.evalResponse(e.target.id)
  }

  evalResponse = (num) => {
    let responseClass = this.state.responseClass.split(" ");
    if (num >= 6 ) {
      if (!this.isResponseShown(responseClass)) {
        responseClass.push("show-response");
      }
    }
    else {
      if (this.isResponseShown(responseClass)) {
        responseClass = responseClass.filter(rp => rp !== "show-response");
      }
    }
    responseClass = responseClass.join(" ");
    this.setState({ responseClass: responseClass });
  }

  isResponseShown = (responseClass) => {
    return responseClass.includes("show-response");
  }
    


  render() {
    const levels = numArray(this.props.scale);
    return (
      <div className="number-scale">
				{ this.props.content !== "" ? (<h3>{ this.props.content }</h3>) : "" }
        <div className="clearfix">
          <p className="float-left scale-label">{ this.props.leftLabel }</p>
          <p className="float-right scale-label">{ this.props.rightLabel }</p>
        </div>
        <div className="scale btn-group btn-group-toggle" data-toggle="buttons">
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
        <div className={ this.state.responseClass }>
          <p className="response">{ this.props.response }</p>
        </div>
      </div>
    );
  }
}

export default NumberScale;
