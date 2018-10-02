import React from 'react';
import { Route } from 'react-router-dom';
import UserLogin from './components/UserLogin.js';
import UserRegistration from './UserRegistration.js';

const App = () => {
  return (
    <div className="container">
      <Route path="/admin" component={ UserRegistration } />
      <Route path="/login" component={ UserLogin } />
    </div>
  );
}

export default App;
