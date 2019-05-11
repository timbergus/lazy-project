// @flow

// Global application styles.

import './app.scss';

// Base application tools.

import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Login from './routes/login';
import Secure from './routes/secure';

type Props = {};
type State = {
  hasError: boolean,
};

class App extends Component<Props, State> {
  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Router>
        <>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/secure" component={Secure} />
        </>
      </Router>
    );
  }
}

export default hot(App);
