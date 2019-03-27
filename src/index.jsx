import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import client from './client';

import App from './app';

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
