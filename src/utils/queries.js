import gql from 'graphql-tag';

export const GET_INFO = gql`
  query GET_INFO {
    info @client {
      message
    }
  }
`;

export const GET_COUNTER = gql`
  query GET_COUNTER {
    counter {
      value
    }
  }
`;

export const MODIFY_COUNTER = gql`
  mutation MODIFY_COUNTER($amount: Int!) {
    modifyCounter(amount: $amount) @client {
      value
    }
  }
`;

export const GET_USERS = gql`
  query GET_USERS {
    users {
      id
      name
    }
  }
`;
