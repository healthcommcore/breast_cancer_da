import React, { Component } from 'react';
import NumberScale from './NumberScale';
import WorryTable from './WorryTable';
import NextButton from './NextButton';
import { toInt, exists } from '../helpers/utilities';

class WorryAssessment extends Component {
  constructor(props) {
    super(props);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.hasHighDistress = this.hasHighDistress.bind(this);
    this.hasAnyWorries = this.hasAnyWorries.bind(this);
    this.state = {};
  }

	handleScaleChange = (type, value) => {
		this.setState({[type]: value });
	}

  getNextDestination = () => {
    if ( this.hasHighDistress(this.state.distress) || 
         this.hasAnyWorries([this.state.general, this.state.during, this.state.after]) ) {
      return "high-anxiety";
    }
    return "summary";
  }

  hasHighDistress = (distress) => {
    return ( exists(distress) && toInt(distress) >= 5 );
  }

  hasAnyWorries = (worries) => {
    return worries.some( (worry) => {
      return exists(worry) && (toInt(worry) >= 4);
    });
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
        <WorryTable onScaleSelect={ this.handleScaleChange }/> 
        <NextButton dest={ this.getNextDestination() } />
			</div>
		);
  }
}

export default WorryAssessment;

