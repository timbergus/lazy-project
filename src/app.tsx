// @flow

// Global application styles.

import './app.css';

// Base application tools.

import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Login from './routes/login';
import Secure from './routes/secure';

const App = () => (
  <Router>
    <>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/secure" component={Secure} />
    </>
  </Router>
);

export default hot(App);
