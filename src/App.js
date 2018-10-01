import React from 'react';
import { Route } from 'react-router-dom';
import UserRegistration from './UserRegistration.js';

const App = () => {
  return (
    <div className="container">
      <Route path="/admin" component={ UserRegistration } />
    </div>
  );
}

export default App;
