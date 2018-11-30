import React, { Component } from 'react';
import NumberScale from './NumberScale';
import WorryTable from './WorryTable';

class WorryAssessment extends Component {
  constructor(props) {
    super(props);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.state = {};
  }

	handleScaleChange(feeling, scale) {
		this.setState({[feeling]: scale });
	}

  render() {
    return (
			<div>
				<h1>How are you feeling about your treatment decision?</h1>
				<p>We would like to know how you have been feeling since being told about the surgical options for your breast cancer.</p>
				<p>Please select the number (0-10) that best describes how much distress you have been experiencing <strong>related to your breast cancer surgical decision</strong> in the past week, including today:</p>
				<NumberScale
					scale="10"
					leftLabel="No distress"
					rightLabel="Extreme distress"
					onScaleSelect={ this.handleScaleChange }
					value="distress"
					content=""
				/>
        <p><strong>I would find it helpful if I received more assistance to cope with my:</strong></p> 
        <WorryTable /> 
			</div>
		);
  }
}

export default WorryAssessment;

