import React from 'react';
import { lumpEligible } from '../helpers/user_stats.js';
import LumpectomyAccordion from './accordions/LumpectomyAccordion';
import TreatmentOptionsLumpText from './TreatmentOptionsLumpText';
import MastectomyAccordion from './accordions/MastectomyAccordion';
import NextButton from './NextButton';
import 'react-accessible-accordion/dist/fancy-example.css';

const TreatmentOptions = (props) => {
  return (
    <div>
      <h1>What are my treatment options?</h1>
      <p>Your options for surgical treatment are:</p>
      <ul>
        { lumpEligible() ?  <li>Lumpectomy</li> : "" }
        <li>Mastectomy (with or without reconstruction)</li>
      </ul>
			{ lumpEligible() ?  <TreatmentOptionsLumpText /> : "" }
			{ lumpEligible() ?  <LumpectomyAccordion /> : "" }
			<p><strong>Mastectomy</strong> (with or without reconstruction) is a surgical procedure in which the entire breast is removed.</p> 
      <p>The surgery lasts about 2 hours but can be longer with reconstruction.</p>
      <MastectomyAccordion />
      <NextButton dest="values-comparison" />
    </div>
  );
}

export default TreatmentOptions;

