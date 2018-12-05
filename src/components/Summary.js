import React, { Component } from 'react';
import TreatmentComparison from './TreatmentComparison';
import values_content from '../helpers/values_content.json';
import worry_content from '../helpers/worry_content.json';

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
    props.data.worry = {
      distress: 7,
      general: 5,
      during: 5,
      after: 5,
    }
    {/*
    */}
  }

  render() {
    const worry_resp = this.props.data.worry
    return (
      <div>
        <h1>Your summary</h1>
        <h2>What is important to you?</h2>
        <p><em>Your responses on a scale of 0 (Not important) to 5 (Very important)</em></p>
        <ol>
          { this.props.data.values !== undefined ? values_content.map( (entry, i) => {
            return (
              <li key={i}>
                <p>{ entry.content }<br />
                You chose: <strong> { this.props.data.values[entry.value] + " out of 5" } </strong></p>
              </li>
            );
          }) : "" }
        </ol>
        <h2>Treatment comparison</h2>
        <TreatmentComparison />
        
        <h2>How are you feeling about your treatment decision</h2>
        <p><em>Your response on a scale of 0 (No distress) to 10 (Extreme distress) of how much distress you have been experiencing related to your breast cancer surgical decision in the past week:</em></p>
        <p>You chose <strong> { worry_resp.distress + " out of 10" } </strong></p>
        <p><em>Your responses on a scale of 1 (Strongly disagres) to 5 (Strongly agree) if you would find it helpful to receive assistance to cope with the following:</em></p>
        <ol>
          { worry_content.body.map( (worry, i) => {
            return (
              <li key={i}>
                <p>{ worry.content }<br />
                You chose 
                  <strong>
                    { " " + worry_resp[worry.type] + " (" +
                      worry_content.labels[worry_resp[worry.type]] +
                      ") out of 5"
                    }
                  </strong>
                </p>
              </li>
            );
          })}
        </ol>
        <h2>Next steps</h2>
        <p>The treatment you are leaning toward:</p>
        <p>How ready you are to make a decision:</p>
        <p><em>If relevant</em><br />
        What would help you to make a decision</p>
      </div>
    )
  }
}

export default Summary;
