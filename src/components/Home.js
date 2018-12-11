import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <h1>Deciding about breast cancer surgery</h1>
      <p className="lead">For young women recently diagnosed with early stage breast cancer</p>
      <p>We hope you find this resource a useful tool to:</p>
      <ul>
          <li>Learn more about the pros and cons of your surgery options</li>
          <li>Think about what is important to you to help make your surgery decision</li>
      </ul>

      <Link className="btn btn-primary btn-lg" to="/treatment-options">Learn about your options</Link>

      <p>You can stop at any point and come back later to review this information. Your information won’t be saved, but on the last screen, you’ll have an option to print the information and your responses.</p>

      <p><Link to="/about">Learn more about this study</Link></p>
      <p><a href="#">Contact the study team</a></p>
    </div>
  );
}

export default Home;
