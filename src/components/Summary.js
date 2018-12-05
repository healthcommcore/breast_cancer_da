import React, { Component } from 'react';
import TreatmentComparison from './TreatmentComparison';
import values_content from '../helpers/values_content.json';
import worry_content from '../helpers/worry_content.json';
import next_steps_content from '../helpers/next_steps_content.json';
import { toInt } from '../helpers/utilities';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    {/*
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
      what_treatment: 2,
      how_ready: 1,
      what_would: 0,
    }
    props.data.worry = {
      distress: 7,
      general: 5,
      during: 5,
      after: 5,
    }
    */}
  }

  render() {
    const values_resp = this.props.data.values || "";
    const worry_resp = this.props.data.worry || "";
    const next_resp = this.props.data.next || "";
    return (
      <div>
        <h1>Your summary</h1>
        <h2>What is important to you?</h2>
        <p><em>Your responses on a scale of 0 (Not important) to 5 (Very important)</em></p>
        <ol>
          { values_content.map( (entry, i) => {
            return (
              <li key={i}>
                <p>{ entry.content }<br />
                You chose: <strong> { values_resp[entry.value] + " out of 5" } </strong></p>
              </li>
            );
          })}
        </ol>
        <h2>Treatment comparison</h2>
        <TreatmentComparison showBilateral/>
        
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
        <p>The treatment you are leaning toward:<br />
        <strong>{ next_steps_content.primary[0].choices[toInt(next_resp.what_treatment)] }</strong></p>
        <p>How ready you are to make a decision:<br />
        <strong>{ next_steps_content.primary[1].choices[toInt(next_resp.how_ready)] }</strong></p>
        { next_resp.what_would !==undefined ? 
          <p>What would help you to make a decision<br />
          <strong>{ next_steps_content.followup.choices[toInt(next_resp.what_would)] }</strong></p> : ""
        }
        {/*
        */}
      </div>
    )
  }
}

export default Summary;
