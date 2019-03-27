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
  <Query query={INFO}>
    {
      ({ loading, error, data }) => {
        if (loading) return <LoadStateClient />;
        if (error) return `Error! ${error.message}`;
        return <h1>{data?.info?.message}</h1>;
      }
    }
  </Query>
);
