import './app.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { hot } from 'react-hot-loader/root';

import universal from 'react-universal-component';

import Loading from './components/loading';

import Home from './routes/home';

const About = universal(() => import(/* webpackChunkName: 'about' */ './routes/about'), {
  loading: <Loading />,
});

const Users = universal(() => import(/* webpackChunkName: 'users' */ './routes/users'), {
  loading: <Loading />,
});

class App extends Component {
  state = {
    hasError: false,
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/about"  component={About} />
          <Route path="/users" component={Users} />
        </div>
      </Router>
    );
  }
}

export default hot(App);
