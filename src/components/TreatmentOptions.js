import React, { Component } from 'react';
import TreatmentOptionsLump from './TreatmentOptionsLump';
import 'react-accessible-accordion/dist/fancy-example.css';

class TreatmentOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>What are my treatment options?</h1>
        <p>Your options for surgical treatment are:</p>
        <ul>
            <li>Lumpectomy</li>
            <li>Mastectomy (with or without reconstruction)</li>
        </ul>
        <TreatmentOptionsLump />
      </div>
    )
  }
}

export default TreatmentOptions;

