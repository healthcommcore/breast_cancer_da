import React, { Component } from 'react';
import NextButton from './NextButton';
import NumberScale from './NumberScale';
import { lumpEligible } from '../helpers/user_stats.js';
import content from '../helpers/values_content.json';

class ValuesClarification extends Component {
  constructor(props) {
    super(props);
    this.handleScaleChange = this.handleScaleChange.bind(this);
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
        
        <p><i>The information you enter below is for you and is not being saved to this website. Having a printed copy might be helpful, and on the last screen, you’ll have an option to print the information and your responses.</i></p>
        
        <p><strong>Please indicate on the scale below how important each statement is to you:</strong></p>
				{ content.map( (entry, idx) => {
					return (
						<NumberScale 
							scale="10" 
							leftLabel="Not at all important"
							rightLabel="Extremely important"
							onScaleSelect={ this.handleScaleChange } 
							value={entry.value}
							key={idx}
							content={entry.content}
              response={ entry.response }
						/>
					);
				})}
        <NextButton dest="worry-assessment" />
      </div>
    );
  }
}

export default ValuesClarification;
