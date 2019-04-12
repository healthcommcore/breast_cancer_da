import React, { Component } from 'react';
import EmailForm from './EmailForm';
import NextButton from './NextButton';
import axios from 'axios';

class HighAnxiety extends Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
  }

  /*
  */
  sendEmail = (data) => {
    axios({
      method: 'post',
      url: this.props.api + '?req=anxiety_email',
      data: data.email
    })
      .then( (result) => {
        console.log(result);
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Supportive resources</h1>
        <p>It’s normal to be feeling distress about your diagnosis and/or worried or uncertain about your treatment. We’d like to offer you some additional support as you think about your surgical decision. </p> 

        <p>If you would like someone from the study team to contact you with information about support options for newly diagnosed young women with breast cancer, please provide your email, and we will be in touch.</p>
        <EmailForm storeData = { this.sendEmail } />

        <p>See resources[LINK to Resources page] available to help you cope with some of the worries and concerns you may be having.</p>

        <p>Learn strategies to help you cope with some of the worries and concerns you may be having:</p> 
        <div className="clearfix">
          <div className="row">
            <div className="col-2">
              <a target="_blank" rel="noopener noreferrer" className="btn btn-primary" href="https://survivorship.cancer.gov/springboard/video-stories-playlist/relaxation-exercises">Relaxation exercises</a>
            </div>
            <div className="col-2">
              <a target="_blank" rel="noopener noreferrer" className="btn btn-primary" href="https://survivorship.cancer.gov/springboard/stress-mood/practice-mindfulness">Mindfulness strategies</a>
            </div>
          </div>
        </div>
        <NextButton dest="next-steps" />
      </div>
    );
  }
}

export default HighAnxiety;
