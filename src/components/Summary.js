import React, { Component } from "react";
import TreatmentComparison from "./TreatmentComparison";
import ValuesResponse from "./ValuesResponse";
import values_content from "../helpers/values_content.json";
import worry_content from "../helpers/worry_content.json";
import next_steps_content from "../helpers/next_steps_content.json";
import { toInt } from "../helpers/utilities";

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
        <div className="summary-spacer">
          <h2>Treatment comparison</h2>
          <TreatmentComparison />
        </div>
        <div className="summary-spacer">
          <h2>What is important to you?</h2>
          <ol>
            { values_content.map( (entry, i) => {
              return (
                <li key={i}>
                  <p>{ entry.content }</p>
{/* IIFE to display user's value response if there is one and if not, display a no answer given message */}
                    { (() => {
                      if(values_resp[entry.value]) {
                        return (
                          <div>
                            <p><em>On a scale of 0 (Not at all important) to 10 (Extremely important), you ranked this as</em> <strong> { values_resp[entry.value] }.</strong></p>
                            <ValuesResponse responseClass={ values_resp[entry.value] >= 6 ? "value-response show-response" : "value-response" }>
                              { entry.response }
                            </ValuesResponse>
                          </div>
                        );
                      }
                      else {
                        return <p><em>This question was not answered</em></p>;
                      }
                    })()}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="summary-spacer">
          <h2>Next steps</h2>
          <p>The treatment you are leaning toward:<br />
          <strong>{ next_steps_content.primary[0].choices[toInt(next_resp.what_treatment)] }</strong></p>
          <p>How ready you are to make a decision:<br />
          <strong>{ next_steps_content.primary[1].choices[toInt(next_resp.how_ready)] }</strong></p>
          { next_resp.what_would !==undefined ? 
            <p>What would help you to make a decision:<br />
            <strong>{ next_steps_content.followup.choices[toInt(next_resp.what_would)] }</strong></p> : ""
          }
          {/*
          */}
        </div>
        <button className="btn btn-lg btn-primary" onClick={ window.print }>Print your summary</button>
      </div>
    )
  }
}

export default Summary;
