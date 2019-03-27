import React from 'react';
import { Query } from 'react-apollo';

import gql from 'graphql-tag';

import { LoadStateClient } from '../components/load-state';

const INFO = gql`
  query INFO {
    info @client {
      message
    }
  }
`;

export default () => (
  <>
    <h1>And the message is...</h1>
    <Query query={INFO}>
      {
        ({ loading, error, data }) => {
          if (loading) return <LoadStateClient />;
          if (error) return `Error! ${error.message}`;
          return <h2>{`${data?.info?.message}`}</h2>;
        }
      }
    </Query>
  </>
);
