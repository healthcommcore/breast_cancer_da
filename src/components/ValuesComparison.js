import React from 'react';
import NextButton from './NextButton';
import { lumpEligible } from '../helpers/user_stats.js';

const ValuesComparison = (props) => {
  return (
    <div>
      <h1>What is important to you?</h1>
      <p>Considering which of the following are most important to you can help you to make your decision about breast cancer surgery.</p>
      <p><strong>Please indicate on the scale below how important each statement is to you:</strong></p>
    </div>
  );
}

export default ValuesComparison;
