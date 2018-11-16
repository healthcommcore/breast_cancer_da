import React, { Component } from 'react';
import NextButton from './NextButton';
import NumberScale from './NumberScale';
import { lumpEligible } from '../helpers/user_stats.js';

class ValuesComparison extends Component {
  constructor(props) {
    super(props);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.state = {
      scale: ""
    }
  }

  handleScaleChange(scale) {
    this.setState({ scale: scale });
  }

  render() {
    return (
      <div>
        <h1>What is important to you?</h1>
        <p>Considering which of the following are most important to you can help you to make your decision about breast cancer surgery.</p>
        <p><strong>Please indicate on the scale below how important each statement is to you:</strong></p>
        <NumberScale 
          scale="5" 
          leftLabel="Not important"
          rightLabel="Very important"
          onScaleSelect={ this.handleScaleChange } 
        />
      </div>
    );
  }
}

export default ValuesComparison;
