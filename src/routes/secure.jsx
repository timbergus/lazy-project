// @flow

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';

import Routes from './routes';
import Navigation from '../components/navigation';

import { GET_CREDENTIALS } from '../apollo/queries';

type Props = {
  credentials: Object,
}

@graphql(GET_CREDENTIALS, { name: 'credentials' })

class Login extends Component<Props> {
  render() {
    const { credentials: { credentials: { username, password } } } = this.props;

    if (username && password) {
      return (
        <>
          <Navigation />
          <Routes />
        </>
      );
    }

    return <Redirect to={{ pathname: '/login' }} />;
  }
}

export default Login;
