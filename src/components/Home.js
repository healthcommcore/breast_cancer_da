import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
    <h1 className="home-title">
      Consid<span className="larger">y</span>r<br />
      <p className="lead">Communicating Options about Surgery for Young women Diagnosed with Early stage breast canceR</p>
    </h1>
      
      <p>CONSYDER is a decision tool for young women recently diagnosed with early-stage breast cancer who are making decisions about breast cancer surgery.</p>
      
      <p>We hope you find this is a useful tool to:</p>
      <ul>
          <li>Learn more about the pros and cons of your surgery options</li>
          <li>Think about what is important to you to help make your surgery decision</li>
      </ul>

     <p><i>You can stop at any point and come back later to review this information. The information on this website, including any responses that you enter, is for you and is not being saved to this website. Having a printed copy might be helpful, and on the last screen, you’ll have an option to print the information and your responses.</i></p>

       <Link className="btn btn-primary btn-lg" to="/treatment-options">Learn about your options</Link>

      
      <p className="home-buttons">
        <Link className="btn btn-secondary" to="/about">Learn more about this study</Link>
        <a className="btn btn-secondary" href="#">Contact the study team</a>
      </p>
    </div>
  );
}

export default Home;
