import React from "react";

const MultChoiceQuest = (props) => {
  return (
    <div className="mult-choice-quest">
      <p>{ props.question }</p>
      <div className="form-check">
        { props.choices.map( (choice, i) => {
          return (
						<div key={i}>
							<input 
								className="form-check-input" 
								type="radio" 
								name={ props.name } 
								value={i}
								id={i} 
								onChange={ props.storeResult }
							/>
							<label className="form-check-label" htmlFor={i}>
								{ choice }
							</label>
						</div>
          );
        })}
      </div>
    </div>
  );
}

export default MultChoiceQuest;
