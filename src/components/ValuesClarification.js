import React, { Component } from 'react';
import NextButton from './NextButton';
import NumberScale from './NumberScale';
import { lumpEligible } from '../helpers/user_stats.js';
import content from '../helpers/values_content.json';

class ValuesClarification extends Component {
  constructor(props) {
    super(props);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.state = {}
  }

  handleScaleChange = (value, scale) => {
    this.setState({[value]: scale });
  }

  componentWillUnmount = () => {
    this.props.onSaveProgress({ values: this.state });
  }

  render() {
    return (
      <div>
        <h1>What is important to you?</h1>
        <p>Considering which of the following are most important to you can help you to make your decision about breast cancer surgery.</p>
        <p><strong>Please indicate on the scale below how important each statement is to you:</strong></p>
				{ content.map( (entry, idx) => {
					return (
						<NumberScale 
							scale="10" 
							leftLabel="Not important"
							rightLabel="Very important"
							onScaleSelect={ this.handleScaleChange } 
							value={entry.value}
							key={idx}
							content={entry.content}
						/>
					);
				})}
        <NextButton dest="treatment-comparison" />
      </div>
    );
  }
}

export default ValuesClarification;
