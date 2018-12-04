import React, { Component } from 'react';
import MultChoiceQuest from './MultChoiceQuest';
import questions from '../helpers/next_steps_content.json';

class NextSteps extends Component {
  constructor(props) {
    super(props);
    this.storeResult = this.storeResult.bind(this);
    this.state = {};
  }

  storeResult = (e) => {
    console.log(e.target.id);
  }

  render() {
    return (
      <div>
        <h1>Next steps</h1>
        { questions.primary.map( (question, i) => {
          return (
            <MultChoiceQuest
              key={i}
              question={ question.question }
              choices={ question.choices }
              storeResult={ this.storeResult }
            />
          );
        })}
      </div>
    );
  }
}

export default NextSteps;

