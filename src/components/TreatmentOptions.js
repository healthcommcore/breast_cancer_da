import React from 'react';
//import { lumpEligible } from '../helpers/user_stats.js';
import store from 'store';
import LumpectomyAccordion from './accordions/LumpectomyAccordion';
import TreatmentOptionsLumpText from './TreatmentOptionsLumpText';
import MastectomyAccordion from './accordions/MastectomyAccordion';
import ReconstructionAccordion from './accordions/ReconstructionAccordion';
import NextButton from './NextButton';
import 'react-accessible-accordion/dist/fancy-example.css';

const TreatmentOptions = (props) => {
  const user = store.get('user');
  return (
    <div>
      <h1>What are my treatment options?</h1>
      <p>Your options for surgical treatment are:</p>
      <ul>
        { user.lump ?  <li>Lumpectomy</li> : "" }
        <li>Mastectomy (with or without reconstruction)</li>
      </ul>
			{ user.lump ?  <TreatmentOptionsLumpText /> : "" }
			{ user.lump ?  <div className="col-md-10"><LumpectomyAccordion /></div> : "" }
			<p><strong>Mastectomy</strong> (with or without reconstruction) is a surgical procedure in which the entire breast is removed.</p> 
      <p>The surgery lasts about 2 hours but can be longer with reconstruction.</p>
      <div className="col-md-10">
        <MastectomyAccordion />
      </div>
			<p><strong>Reconstruction</strong> is a surgical procedure to restore the shape of the breast after a mastectomy. Reconstruction may be immediate (performed at the same time as your mastectomy) or delayed (a separate surgery done at a later time). Not everyone is a candidate for immediate reconstruction, so discuss your options with your surgeon. Your plastic surgeon will be able to help you decide which type of reconstruction is right for you:</p> 
      <div className="col-md-10">
        <ReconstructionAccordion />
      </div>
      <NextButton dest="values-clarification" />
    </div>
  );
}

export default TreatmentOptions;

