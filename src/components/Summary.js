import React, { Component } from 'react';
import TreatmentComparison from './TreatmentComparison';
import values_content from '../helpers/values_content.json';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    props.data.values = {
      additional_surgery : 5,
      keep_breasts : 4,
      recovery : 2,
      breastfeed : 1,
      sensation : 3,
      mammograms : 4,
      similar : 4,
    }
    props.data.next = {
      what_treatment: "Lumpectomy",
    }
    props.data.worry
    {/*
    */}
  }

  render() {
    //console.log(this.props.data.values);
    return (
      <div>
        <h1>Your summary</h1>
        <h2>Your treatment options:</h2>
        <TreatmentComparison />
        <h2>What's important to you</h2>
        <p>Here is how you responded to the following questions (on a scale of 0-5):</p>
        <ol>
          { this.props.data.values !== undefined ? values_content.map( (entry, i) => {
            return (
              <li key={i}>
                <p><em>{ entry.content }</em><br />
                You chose: <strong> { this.props.data.values[entry.value] + " out of 5" } </strong></p>
              </li>
            );
          }) : "" }
        </ol>
        <h2>You are leaning toward</h2>
        <p>Content coming</p>
        <h2>You are feeling</h2>
        <p>Content coming</p>
        <h2>What might help you make a decision</h2>
        <p>Content coming</p>
      </div>
    )
  }
}

export default Summary;
