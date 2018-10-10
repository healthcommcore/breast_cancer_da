import React from 'react';

const Home = (props) => {
  return (
    <div>
      <h1>Deciding about breast cancer surgery</h1>
      <p className="lead">A decision aid for young women with early-stage breast cancer</p>
      <p>We hope you find this resource a useful tool to:</p>
      <ul>
        <li>Learn more about the pros and cons of different types of surgery</li>
        <li>Think about what is important to you as you make this decision</li>
      </ul>

      <button type="button" className="btn btn-primary btn-lg">Learn about your options</button>
    </div>
  );
}

export default Home;
