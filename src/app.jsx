// @flow

// Global application styles.

import './app.scss';

// Base application tools.

import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Routes from './routes/routes';

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
          <nav>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/about">About</Link>
          </nav>
          <Routes />
        </>
      </Router>
    );
  }
}

export default hot(App);
