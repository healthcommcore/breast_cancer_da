import React, { Component } from 'react';
import MultChoiceQuest from './MultChoiceQuest';
import NextButton from './NextButton';
import questions from '../helpers/next_steps_content.json';
import { toInt, exists, propify } from '../helpers/utilities';

class NextSteps extends Component {
  constructor(props) {
    super(props);
    this.storeResult = this.storeResult.bind(this);
    this.isNotReady = this.isNotReady.bind(this);
    this.whatWouldHelp = this.whatWouldHelp.bind(this);
    this.state = {};
  }

  storeResult = (e) => {
    this.setState({[e.target.name] : e.target.id});
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

