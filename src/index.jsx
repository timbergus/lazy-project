import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import client from './client';

import App from './app';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

render(
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
