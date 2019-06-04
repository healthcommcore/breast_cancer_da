import React, { Component } from "react";
import OtherTextField from "./OtherTextField";
import { exists, propify } from "../helpers/utilities";

class MultChoiceQuest extends Component {
  constructor(props) {
    super(props);
    this.storeResult = this.storeResult.bind(this);
    this.state = { 
      showOther: false,
      what_would: []
    }
  }

  storeResult = (e) => {
    let toStore = { ...this.state };
    if (e.target.value === "other_radio") {
      toStore.showOther = !toStore.showOther;
    }
    else if (e.target.type === "text") {
      if (e.target.name === "what_treatment_other") {
        toStore.what_treatment = e.target.value;
      }
      else {
        toStore[e.target.name] = e.target.value;
      }
    }
    else if (e.target.type === "checkbox") {
      const val = e.target.value;
      let what_would = this.state.what_would;
      if (what_would.includes(val)) {
        what_would = what_would.filter(i => i !== val);
      }
      else {
        what_would.push(val);
      }
      toStore.what_would = what_would;
    }
    else {
      toStore.showOther = false;
      toStore[e.target.name] = e.target.id;
    }
    this.setState({ ...toStore });
    this.props.storeResult(toStore);
  }

  render() {
    return (
      <div className="mult-choice-quest">
        <p>{ this.props.question }</p>
        <div className="form-check">
          { this.props.choices.map( (choice, i) => {
            return (
              <div key={i}>
                <input 
                  className="form-check-input" 
                  type={ this.props.type }
                  name={ this.props.name } 
                  id={ choice === "Other" ? this.props.name + "_other" : i }
                  value={ choice === "Other" ? "other_radio" : i} 
                  onChange={ this.storeResult }
                />
                <label className="form-check-label" htmlFor={i}>
                  { choice }
                </label>
              </div>
            );
          })}
        </div>
        <OtherTextField
         displayClass={ this.state.showOther ? "block" : "none" }
         name={ this.props.name + "_other" }
         id={ this.props.name + "_other" }
         onChange={ this.storeResult }
        />
      </div>
    );
  }
}

export default MultChoiceQuest;
