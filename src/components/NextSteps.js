import React, { Component } from "react";
import MultChoiceQuest from "./MultChoiceQuest";
import NextButton from "./NextButton";
import OtherTextField from  "./OtherTextField";
import { animateScroll } from "react-scroll";
import questions from "../helpers/next_steps_content.json";
import { toInt, exists, propify } from "../helpers/utilities";

class NextSteps extends Component {
  constructor(props) {
    super(props);
    const saved = props.savedValues;
    this.storeResult = this.storeResult.bind(this);
    this.isNotReady = this.isNotReady.bind(this);
    this.whatWouldHelp = this.whatWouldHelp.bind(this);
    this.state = { ...saved } || {};
  }

  storeResult = (data) => {
    this.setState({ ...data });
  }

  componentDidMount = () => {
    animateScroll.scrollToTop({ duration: 100 });
  }

  componentWillUnmount = () => {
    this.props.onSaveProgress({ next: this.state });
  }

  isNotReady = (how_ready) => {
    return ( 
        exists(how_ready) && toInt(how_ready) >= 1
    ); 
  }

  whatWouldHelp = () => {
    const question = questions.followup;
    return (
      <MultChoiceQuest
        question={ question.question }
        choices={ question.choices }
        name={ propify(question.question) }
        storeResult={ this.storeResult }
        type="checkbox"
      />
    );
  }
       
  render() {
    return (
      <div>
        <h1>Next steps</h1>
        <p className="disclaimer">The information you enter below is for you and is not being saved to this website. Having a printed copy might be helpful, and on the last screen, you’ll have an option to print the information and your responses.</p>
        { questions.primary.map( (question, i) => {
          return (
            <MultChoiceQuest
              key={i}
              question={ question.question }
              choices={ question.choices }
              storeResult={ this.storeResult }
              name={ propify(question.question) }
              type="radio"
            />
          );
        })}
        { this.isNotReady(this.state.how_ready) ? this.whatWouldHelp() : "" }
        <NextButton dest="summary" />
      </div>
    );
  }
}

export default NextSteps;

